import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useNotification은 알람이 실행되는 function
//Notification API
const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotir = useNotification("Can I steal your kimchi?", {body: "I love kimchi dont you"});
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotir}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
