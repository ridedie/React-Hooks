import React, { useState, eseEffect, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useRef - reference는 우리의 componenet의 어떤 부분을 선택할 수 있는 방법
//ducument.getElementByID()를 사용한 것과 동등
//react에 있는 모든 component는 reference element를 가지고 있다.
//useEffect가 할 일은 referent안에 element.current가 있는 확인 후 Click 이벤트 부여

//useEffect(function(), [])함수를 호출하면 [](dependency)가 비어있기 때문에 페이지가 시작하는 최초에만 함수를 발생
//function에 return 값을 주면 페이지가 종료되는 시점에 return을 실행
//한번만 등록되고 실행 후 삭제되니 이벤트가 중복으로 등록될 일이 없다.
export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if(typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
