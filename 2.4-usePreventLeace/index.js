import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//usePreventLeave 저장하지 않았으면 알려준다. 예를 들어 window 창이 있다.
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePreve, disablePrevent };
};

const App = () => {
  const { enablePreve, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
