import { useState, useEffect, useCallback, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [renderedStreamDuration, setRenderedStreamDuration] =
      useState('00:00:00'),
    streamDuration = useRef(0),
    previousTime = useRef(0),
    requestAnimationFrameId = useRef(null),
    [isStartTimer, setIsStartTimer] = useState(false),
    [isStopTimer, setIsStopTimer] = useState(false),
    [isPauseTimer, setIsPauseTimer] = useState(false),
    [isResumeTimer, setIsResumeTimer] = useState(false),
    isStartBtnDisabled = isPauseTimer || isResumeTimer || isStartTimer,
    isStopBtnDisabled = !(isPauseTimer || isResumeTimer || isStartTimer),
    isPauseBtnDisabled = !(isStartTimer || (!isStartTimer && isResumeTimer)),
    isResumeBtnDisabled = !isPauseTimer;

  const updateTimer = useCallback(() => {
    let now = performance.now();
    let dt = now - previousTime.current;

    if (dt >= 1000) {
      streamDuration.current = streamDuration.current + Math.round(dt / 1000);
      const formattedStreamDuration = new Date(streamDuration.current * 1000)
        .toISOString()
        .substr(11, 8);
      setRenderedStreamDuration(formattedStreamDuration);
      previousTime.current = now;
    }
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, []);

  const startTimer = useCallback(() => {
    previousTime.current = performance.now();
    requestAnimationFrameId.current = requestAnimationFrame(updateTimer);
  }, [updateTimer]);

  useEffect(() => {
    if (isStartTimer && !isStopTimer) {
      startTimer();
    }
    if (isStopTimer && !isStartTimer) {
      streamDuration.current = 0;
      cancelAnimationFrame(requestAnimationFrameId.current);
      setRenderedStreamDuration('00:00:00');
    }
  }, [isStartTimer, isStopTimer, startTimer]);

  const startHandler = () => {
    setIsStartTimer(true);
    setIsStopTimer(false);
  };

  const stopHandler = () => {
    setIsStopTimer(true);
    setIsStartTimer(false);
    setIsPauseTimer(false);
    setIsResumeTimer(false);
  };

  const pauseHandler = () => {
    setIsPauseTimer(true);
    setIsStartTimer(false);
    setIsResumeTimer(false);
    cancelAnimationFrame(requestAnimationFrameId.current);
  };

  const resumeHandler = () => {
    setIsResumeTimer(true);
    setIsPauseTimer(false);
    startTimer();
  };

  return (
    <div className="timer-controller-wrapper card card-2">
      <div className="timer-display">{renderedStreamDuration}</div>
      <div className="buttons-wrapper">
        <button
          onClick={startHandler}
          disabled={isStartBtnDisabled}
          className={`timer-controller-btn ${
            isStartBtnDisabled ? 'disabled' : ''
          }`}
        >
          start
        </button>
        <button
          className={`timer-controller-btn danger ${
            isStopBtnDisabled ? 'disabled' : ''
          }`}
          disabled={isStopBtnDisabled}
          onClick={stopHandler}
        >
          stop
        </button>
        <button
          className={`timer-controller-btn ${
            isPauseBtnDisabled ? 'disabled' : ''
          }`}
          disabled={isPauseBtnDisabled}
          onClick={pauseHandler}
        >
          pause
        </button>
        <button
          className={`timer-controller-btn ${
            isResumeBtnDisabled ? 'disabled' : ''
          }`}
          disabled={isResumeBtnDisabled}
          onClick={resumeHandler}
        >
          resume
        </button>
      </div>
    </div>
  );
};

export default Timer;
