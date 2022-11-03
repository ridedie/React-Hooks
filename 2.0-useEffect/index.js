import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//useEffect는 2개의 인자를 받는데 첫 번째는 functhon으로써 effect, componentDidMount()와 기능이 비슷함
//두 번째 인자 deps(dependency) useEffect()가 deps리스트에 있는 값이 변할 때만 실행
//componentDidUpdate()와 비슷한 기능
//useEffect에서 두 번째인자 값이 변화할 때 sayHello는 다시 실행됨
const App = () => {
  const [item, setItem] = useState(1);
  const sayHello = () => console.log("hello");
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  useEffect(sayHello, [item]);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>incrementltem</button>
      <button onClick={decrementItem}>decrementltem</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
