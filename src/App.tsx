import React from "react";
import "./App.css";

function App() {
  const myFirstSubscriber = () => {
    console.log("Hello I am Vasya!");
  };
  const mySecondSubscriber = () => {
    console.log("Hello I am Dima!");
  };
  const onClickHandler = (name: string) => {
    console.log(name);
  };
  // const foo1 = () => {
  //   console.log("100200");
  // };
  // const foo2 = (info: number) => {
  //   console.log(info);
  // };

  return (
    <div className="App">
      {/* <button onClick={myFirstSubscriber}>MyFirstYouTubeChanel-1</button>
      <button onClick={mySecondSubscriber}>MySecondYouTubeChanel-2</button> */}

      <button onClick={() => onClickHandler("Vasya")}>MyYouTubeChanel-1</button>
      <button onClick={() => onClickHandler("Dima")}>MyYouTubeChanel-2</button>

      {/* if not sending anything inside {} just function name
      <button onClick={foo1}>1</button>
      {/* if sending something inside {} then it needs to be anonymous function  and then in function above inside () also type*/}
      {/* <button onClick={() => foo2(100200)}>2</button> */}
    </div>
  );
}

export default App;
