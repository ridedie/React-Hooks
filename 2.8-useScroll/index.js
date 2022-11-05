import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useScroll 유저가 스크롤을 지나칠 때 style을 줄 수 있다. ex) 색상변경

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
}

const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: "1000vh"}}>
      <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
