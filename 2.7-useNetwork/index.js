import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useNetwork는 navigator가 online 또는 offline이 되는걸 막아준다.
//network 상태가 바뀔 때마다 function 호출
//navigator.onLine true, false를 말하며, 웹사이트 인지 아닌지 안다.
const useNetwork = (onChange) => {
  const [status, setStaus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
    }
    onChange(navigator.onLine);
    setStaus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("onlick", handleChange);
    window.addEventListener("offlick", handleChange);
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (onlick) => {
    console.log(onLine?"We just went onlien": "we are offline");
  }
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
