import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useConrirm은 사용자가 무언가를 하기전에 맞는지 확인한다. 저장이나 삭제할 때 많이 사용됨
const useConfirm = (message="", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      try{
          onCancel();
        }catch(error){
          return;
        }
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Dele the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
