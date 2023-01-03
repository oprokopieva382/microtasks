import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  // const ButtonFoo1 = (subscriber: string, age: number) => {
  //   console.log(subscriber, age);
  // };

  // const ButtonFoo2 = (subscriber: string) => {
  //   console.log(subscriber);
  // };

  // const ButtonFoo3 = () => {
  //   console.log("I am just for be here");
  // };

  //let a = 1;
  let [a, setA] = useState(1);
  const onClickHandler = () => {
    setA(++a);
    console.log(a);
  };

  const resetHandler = () => {
    setA((a = 0));
    console.log(a);
  };

  return (
    <div className="App">
      {/* <Button
        name={"MyYouTubeChanel-1"}
        callback={() => ButtonFoo1("I am Vasya", 21)}
      />
      <Button
        name={"MyYouTubeChanel-2"}
        callback={() => ButtonFoo2("I am Dima")}
      />
      <Button name={"MyYouTubeChanel-3"} callback={ButtonFoo3} /> */}
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={resetHandler}>0</button>
    </div>
  );
}

export default App;
