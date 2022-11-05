import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


//useFullscreen 말그대로 full screen 된다.
const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  //전체화면인지 체크한 후 아닐 경우에만 document.exitFullscreen()을 실행하게 하기
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullScreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFullScreen, exitFull };
};

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "Weare full" : "We are smail");
  };
  const { element, triggerFullScreen, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://cdn.pixabay.com/photo/2022/08/24/17/28/horses-7408393_960_720.jpg"
          alt="grape"
          width="250"
        />
      </div>
      <button onClick={triggerFullScreen}>Make fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
