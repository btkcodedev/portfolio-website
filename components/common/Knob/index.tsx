import React, { useState, useEffect, useRef, useCallback } from 'react';

interface KnobProps {
  audioSrc?: string;
  spotifyFallback?: string;
}

const SPOTIFY_EMBED = "https://open.spotify.com/embed/track/7t8KM7hbYYZKlemuGnlJrC";

const Knob: React.FC<KnobProps> = ({
  audioSrc = "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b5/e6/4d/b5e64d6c-4cee-14ae-77db-7bacef037b1f/mzaf_14049349036684442387.plus.aac.p.m4a",
  spotifyFallback = SPOTIFY_EMBED,
}) => {
  const [volume, setVolume] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [audioError, setAudioError] = useState<boolean>(false);
  const knobRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudioError(false);
    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = 0;
    audioRef.current.onerror = () => setAudioError(true);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const createTicks = useCallback((numTicks: number, highlightNumTicks: number) => {
    return Array.from({ length: numTicks }, (_, i) => (
      <div
        key={i}
        className={`tick ${i < highlightNumTicks ? 'activetick' : ''}`}
        style={{ transform: `rotate(${-135 + i * 10}deg)` }}
      />
    ));
  }, []);

  const handleStart = useCallback((event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    if (audioRef.current?.paused) {
      audioRef.current.play().catch(error => console.error("Audio playback failed", error));
    }
  }, []);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging || !knobRef.current) return;

    const knobRect = knobRef.current.getBoundingClientRect();
    const knobCenterX = knobRect.width / 2 + knobRect.left;
    const knobCenterY = knobRect.height / 2 + knobRect.top;

    const adjacentSide = knobCenterX - clientX;
    const oppositeSide = knobCenterY - clientY;
    const currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);
    const getRadiansInDegrees = (currentRadiansAngle * 180) / Math.PI;
    let finalAngleInDegrees = -(getRadiansInDegrees - 135);

    if (finalAngleInDegrees >= 0 && finalAngleInDegrees <= 270) {
      const volumeSetting = Math.floor(finalAngleInDegrees / (270 / 100));
      setVolume(volumeSetting);
      if (audioRef.current) audioRef.current.volume = volumeSetting / 100;
    }
  }, [isDragging]);

  useEffect(() => {
    const handleMoveWrapper = (event: MouseEvent | TouchEvent) => {
      if (isDragging) {
        event.preventDefault();
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        handleMove(clientX, clientY);
      }
    };

    document.addEventListener('mousemove', handleMoveWrapper);
    document.addEventListener('touchmove', handleMoveWrapper, { passive: false });
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMoveWrapper);
      document.removeEventListener('touchmove', handleMoveWrapper);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [handleMove, handleEnd, isDragging]);

  const knobRotation = (volume / 100) * 270;
  const highlightedTicks = Math.round((volume * 2.7) / 10);

  if (audioError && spotifyFallback) {
    return (
      <div className="grid-cols-4 w-full mt-8 px-4">
        <p className="ml-4 mb-3 text-sm text-neutral-500">Primary preview unavailable — playing via Spotify:</p>
        <iframe
          style={{ borderRadius: '12px' }}
          src={spotifyFallback}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify player"
        />
      </div>
    );
  }

  return (
    <div className="grid-cols-4 w-full mt-32">
      <p className="ml-8">
        Current volume:
        <span id="volumeValue" className="current-value">
          {volume}%
        </span>
      </p>
      <div className="knob-surround">
        <div 
          ref={knobRef}
          id="knob" 
          className="knob" 
          style={{ transform: `rotate(${knobRotation}deg)`, touchAction: 'none' }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        />
        <span className="min">Min</span>
        <span className="max">Max</span>
        <div id="tickContainer" className="ticks">
          {createTicks(27, highlightedTicks)}
        </div>
      </div>
    </div>
  );
};

export default Knob;