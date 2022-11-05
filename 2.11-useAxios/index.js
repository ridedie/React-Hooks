import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios"
import "./styles.css";


const App = () => {
  const {loading, error, data, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});
  console.log(loading, error, data);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
