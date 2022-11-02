import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//validator 유효성을 검사한다.
//기본값이 Mr.로 되어야하기 때문에 return 해준다.
//값은 initialValue로 받아서 useState의 initalValue로 전달되서 Value로 전달된다.
//input에 value={name.value} onChange={name.onChange}로 적을 수 있지만 {...name}를 적으면 모든 정보가 전달된다.
//validator가 function이라면 willUpdate에 validator의 결과를 업로드한다.
//작성한 글자가 10자 이하면 true이다. true면 setValue가 실행됨으로 화면에 나타난다. 아니라면 나타나지 않는다.
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {target: {value}} = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  };
  return {value, onChange};
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name}  />
        </div>
    )
}

class AppUgly extends React.Component{
    state = {
        tiem: 1
    }
    render() {
        const {item} = this.state;
        return (
            <div className="App">
                <h1>Hello {item}</h1>
                <button onClick={this.incrementItem}>Incrementltem</button>
                <button onClick={this.decrementItem}>Decrementltem</button>
            </div>
        );
    }
    incrementltem =  () => {
        this.setState(state => {
            return {
                item: state.item + 1
            };
        });
    };
    decrementltem =  () => {
        this.setState(state => {
            return {
                item: state.item - 1
            };
        });
    };
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);