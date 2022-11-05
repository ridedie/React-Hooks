import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useBeforeLeave 탭을 닫을 때 실행되는 function
//clientY 마우스의 위치값, 마우스가 위로 벗어나야지 console.log가 나온다.
const useBeforeLeave = (onBefore) => {
  if(typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const {clientY} = event;
    if(clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle)
  }, []);
};

const App = () => {
  const befForLife = () => console.log("Pls dont leave");
  useBeforeLeave(befForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
