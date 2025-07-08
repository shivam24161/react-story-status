import React, { useState, useEffect, useRef } from "react";

const ReactStatus = ({ items, timeout = 3000, customClass = "" }: StoriesI) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newTime, setNewTime] = useState(timeout);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef: any = useRef<number>(null);
  const mouseLeaveRef: any = useRef<number>(null);
  const timeCheck = Date.now();
  // Setting active index
  const handleTimeout = () => {
    clearInterval(mouseLeaveRef.current);
    clearInterval(timerRef.current);
  };
  const handleImage = (e: string) => {
    handleTimeout();
    setIsPaused(false);
    setNewTime(timeout);
    setActiveIndex((prevIndex) =>
      e === "previous"
        ? (prevIndex + items.length - 1) % items.length
        : (prevIndex + 1) % items.length
    );
  };
  // Incrementing index after timeout
  const handleIncrementIndex = () => {
    handleTimeout();
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    setNewTime(timeout);
  };
  // Clearing timeout and calling increment index function
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(handleIncrementIndex, timeout);
    }
    return () => clearInterval(timerRef.current);
  }, [activeIndex]);
  // Pause Time
  const handlePause = () => {
    let currentTime = Date.now() - timeCheck;
    setNewTime(newTime - currentTime);
    setIsPaused(true);
    handleTimeout();
  };
  // Play
  const handlePlay = () => {
    setIsPaused(false);
    mouseLeaveRef.current = setInterval(handleIncrementIndex, newTime);
  };
  // Handling pause and play of time
  const handleTimeElapsed = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.type === "touchstart") {
      handlePause();
    } else if (e.type === "touchend") {
      handlePlay();
    }
  };
  return (
    <div
      className={`jul-stories ${customClass}`.replace(/\s\s+/g, " ").trim()}
      onTouchStart={(e) => handleTimeElapsed(e)}
      onTouchEnd={(e) => handleTimeElapsed(e)}
    >
      <div className="jul-stories__container">
        <figure>
          <img src={items[activeIndex].imageUrl} alt="story" />
          <figcaption>{items[activeIndex].imageCaption}</figcaption>
        </figure>
      </div>
      {items.length !== 1 && (
        <>
          <div className="jul-stories__control">
            <button onClick={() => handleImage("previous")}>Previous</button>
            <button onClick={() => handleImage("next")}>Next</button>
          </div>
          <div className="jul-stories__progressContainer">
            {items.map((i, index: number) => {
              return (
                <div key={index} className="jul-stories__progressItems">
                  <span
                    className={`${
                      index === activeIndex
                        ? "jul-stories__progressItems--active"
                        : ""
                    }`}
                    style={{
                      animationDuration: `${timeout}ms`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  ></span>
                </div>
              );
            })}
          </div>
          <div
            className={`jul-stories__pause-play ${
              isPaused
                ? "jul-stories__pause-play--paused"
                : "jul-stories__pause-play--play"
            }`}
            role="button"
            onClick={(e) => {
              if (!isPaused) {
                handlePause();
              } else {
                handlePlay();
              }
            }}
            aria-label={isPaused ? "play" : "pause"}
          >
            {!isPaused ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.93652H6V20.9365H10V4.93652Z" stroke="#1c2433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 20.9365V4.93652H18V20.9365H14Z" stroke="#1c2433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.93652L19 12.9365L5 21.9365V3.93652Z" stroke="#1c2433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export interface StoriesI {
  items: Items[];
  timeout?: number;
  customClass?: string;
}
interface Items {
  imageUrl?: string;
  imageCaption?: string;
}
export default ReactStatus;
