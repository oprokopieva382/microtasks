import { TopCars } from "./TopCars";

type NewComponentType = {
  students: StudentsType[];
};

type StudentsType = {
  id: number;
  name: string;
  age: number;
};

export const NewComponent = (props: NewComponentType) => {
  const topCars = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];
  return (
    <>
      <ul>
        {props.students.map((el, index) => {
          return (
            <li key={el.id}>
              <span>{el.name}</span>
              <span>{el.age}</span>
            </li>
          );
        })}
      </ul>
      <TopCars topCars={topCars} />
    </>
  );
};
