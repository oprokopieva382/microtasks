import React, { useState } from "react";
import "./App.css";
import { CurrMoney, NewComponents } from "./components/NewComponents";

export type FilterType = "All" | "Dollars" | "Rus";

function App() {
  const [money, setMoney] = useState<Array<CurrMoney>>([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<FilterType>("All");
  let currentMoney = money;
  if (filter === "Rus") {
    currentMoney = money.filter((el) => el.banknots === "RUBLS");
  }
  if (filter === "Dollars") {
    currentMoney = money.filter((el) => el.banknots === "Dollars");
  }

  const onClickHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <>
      <NewComponents
        onClickHandler={onClickHandler}
        currentMoney={currentMoney}
      />
    </>
  );
}

export default App;
