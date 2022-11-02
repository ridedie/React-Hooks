import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//render function이 없다고 render가 안되는 것이 아니라 useState를 사용하면 ri-render가 된다.


//버튼을 클릭하면 index가 무엇이든지 changeItem(index)를 실행한다.
//changeItem의 index는 index안에 있는 값인 0 또는 1로 바꿔준다.
//changeItem이 setCurrentIndex의 item을 바꿔준다
//setCurrentIndex가 useState를 바꿔준다.
//return으로 currentItem의 curretIndex를 바꿔주고 모든 것을 새로고침 한다.
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
  
];


const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if(!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const {currentItem, changeItem}= useTabs(0, content);
    return (
        <div className="App">
          {content.map((section, index) => (
            <button onClick={() => changeItem(index)}>{section.tab}</button>
          ))}
          <div>{currentItem.content}</div>
        </div>
    );
};



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);