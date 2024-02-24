import { useEffect } from "react";

const Knob = () => {
  useEffect(() => {
    const audio = new Audio(
      "https://www.cineblueone.com/maskWall/audio/skylar.mp3"
    );
    const tickContainer = document.getElementById("tickContainer");
    const volumeKnob = document.getElementById("knob");
    let mouseX: number, mouseY: number;
    let boundingRectangle: DOMRect;

    function main() {
      if (!tickContainer || !volumeKnob || !boundingRectangle) return;

      audio.volume = 0;

      volumeKnob.addEventListener(getMouseDown(), onMouseDown);
      document.addEventListener(getMouseUp(), onMouseUp);

      createTicks(27, 0);
    }

    function onMouseDown(event: MouseEvent | TouchEvent) {
      if (audio.paused) {
        const promise = audio.play();
        if (promise !== undefined) {
          promise.then(() => audio.play()).catch((error) => {});
        }
      }

      document.addEventListener(getMouseMove(), onMouseMove);
    }

    function onMouseUp() {
      document.removeEventListener(getMouseMove(), onMouseMove);
    }

    function onMouseMove(event: MouseEvent | TouchEvent) {
      if (!boundingRectangle) return;

      mouseX =
        event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
      mouseY =
        event instanceof MouseEvent ? event.pageY : event.touches[0].pageY;

      const knobCenterX = boundingRectangle.width / 2 + boundingRectangle.left;
      const knobCenterY = boundingRectangle.height / 2 + boundingRectangle.top;
      const adjacentSide = knobCenterX - mouseX;
      const oppositeSide = knobCenterY - mouseY;
      const currentRadiansAngle = Math.atan2(adjacentSide, oppositeSide);
      const getRadiansInDegrees = (currentRadiansAngle * 180) / Math.PI;
      let finalAngleInDegrees = -(getRadiansInDegrees - 135);

      if (finalAngleInDegrees >= 0 && finalAngleInDegrees <= 270) {
        volumeKnob!.style.transform = `rotate(${finalAngleInDegrees}deg)`;
        const volumeSetting = Math.floor(finalAngleInDegrees / (270 / 100));
        const tickHighlightPosition = Math.round((volumeSetting * 2.7) / 10);
        createTicks(27, tickHighlightPosition);
        audio.volume = volumeSetting / 100;
        const volumeValue = document.getElementById("volumeValue");
        if (volumeValue) volumeValue.innerHTML = `${volumeSetting}%`;
      }
    }

    function createTicks(numTicks: number, highlightNumTicks: number) {
      if (!tickContainer) return;

      while (tickContainer.firstChild) {
        tickContainer.removeChild(tickContainer.firstChild);
      }

      let startingTickAngle = -135;

      for (let i = 0; i < numTicks; i++) {
        const tick = document.createElement("div");
        tick.className = i < highlightNumTicks ? "tick activetick" : "tick";
        tickContainer.appendChild(tick);
        tick.style.transform = `rotate(${startingTickAngle}deg)`;
        startingTickAngle += 10;
      }
    }

    function detectMobile() {
      const result = navigator.userAgent.match(
        /(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i
      );
      return result !== null ? "mobile" : "desktop";
    }

    function getMouseDown() {
      return detectMobile() == "desktop" ? "mousedown" : "touchstart";
    }

    function getMouseUp() {
      return detectMobile() == "desktop" ? "mouseup" : "touchend";
    }

    function getMouseMove() {
      return detectMobile() == "desktop" ? "mousemove" : "touchmove";
    }

    boundingRectangle = volumeKnob!.getBoundingClientRect();
    main();

    return () => {
      document.removeEventListener(getMouseMove(), onMouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        Current volume:
        <span id="volumeValue" className="current-value">
          0%
        </span>
      </p>
      <div className="knob-surround">
        <div id="knob" className="knob"></div>

        <span className="min">Min</span>
        <span className="max">Max</span>

        <div id="tickContainer" className="ticks"></div>
      </div>
    </div>
  );
};

export default Knob;
