import React, { useState, useEffect, useRef, useCallback } from 'react';

const SONGS = [
  { title: 'A Dog Song', artist: 'AJR' },
  { title: 'The Dumb Song', artist: 'AJR' },
  { title: 'Bang!', artist: 'AJR' },
  { title: 'The Good Part', artist: 'AJR' },
];

const Knob: React.FC = () => {
  const [volume, setVolume] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const knobRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const media = document.querySelectorAll<HTMLMediaElement>('audio, video');
    media.forEach((item) => {
      item.volume = volume / 100;
      item.muted = volume === 0;
    });
  }, [volume]);

  useEffect(() => {
    let isMounted = true;
    const song = SONGS[selectedIdx];

    fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(`${song.title} ${song.artist}`)}&media=music&entity=song&limit=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setPreviewUrl(data.results?.[0]?.previewUrl ?? '');
      })
      .catch(() => {
        if (isMounted) setPreviewUrl('');
      });

    return () => {
      isMounted = false;
    };
  }, [selectedIdx]);

  useEffect(() => {
    if (!audioRef.current || !previewUrl || !isPlaying) return;
    audioRef.current.load();
    audioRef.current.play().catch(() => setIsPlaying(false));
  }, [previewUrl, isPlaying]);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !previewUrl) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [previewUrl]);

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
    const finalAngleInDegrees = -(getRadiansInDegrees - 135);
    if (finalAngleInDegrees >= 0 && finalAngleInDegrees <= 270) {
      const volumeSetting = Math.floor(finalAngleInDegrees / (270 / 100));
      setVolume(volumeSetting);
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

  return (
    <div className="grid-cols-4 w-full mt-8 px-4">
      <div className="flex flex-wrap justify-center gap-2 mb-3">
        {SONGS.map((song, i) => (
          <button
            key={song.title}
            onClick={() => setSelectedIdx(i)}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              selectedIdx === i
                ? 'bg-green-500 text-white'
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            {song.title}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <audio ref={audioRef} src={previewUrl} loop />
        <button
          onClick={togglePlayback}
          disabled={!previewUrl}
          className="px-3 py-2 text-sm rounded-lg bg-green-500 text-white disabled:bg-neutral-700 disabled:text-neutral-400"
        >
          {isPlaying ? 'Pause' : previewUrl ? 'Play' : 'No Preview'}
        </button>
      </div>

      <p className="mt-4 text-center">
        Volume:
        <span id="volumeValue" className="current-value ml-1">
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
