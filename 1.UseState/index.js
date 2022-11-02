import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <button onClick={incrementItem}>incrementltem</button>
            <button onClick={decrementItem}>decrementltem</button>
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