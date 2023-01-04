import { FilterType } from "../App";

type newComponentsType = {
  currentMoney: CurrMoney[];
  onClickHandler: (nameButton: FilterType) => void;
};

export type CurrMoney = {
  banknots: string;
  value: number;
  number: string;
};

export const NewComponents = (props: newComponentsType) => {
  return (
    <>
      <ul>
        {props.currentMoney.map((el, index) => {
          return (
            <li key={index}>
              <span>{el.banknots}</span>
              <span>{el.value}</span>
              <span>{el.number}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.onClickHandler("All")}>All</button>
        <button onClick={() => props.onClickHandler("Dollars")}>Dollars</button>
        <button onClick={() => props.onClickHandler("Rus")}>Rus</button>
      </div>
    </>
  );
};
