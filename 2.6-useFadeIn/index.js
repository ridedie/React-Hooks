import React, { useState, useEffect ,useRef} from "react";
import ReactDOM from "react-dom";
import "./styles.css";


//componenet가 mount 되면 Hello를 서서히 사라지게 만드는 애니메이션
const useFadeIn = (duration=1, delay = 0) => {
  if(typeof duration !== 'number' || typeof delay !== "number"){
    return;
  } 
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return {ref: element, style: {opacity:0}};
}

const App = () => {
  const fadeInH1 = useFadeIn(2, 4);
  const fadeInP = useFadeIn(2, 7);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalala</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);