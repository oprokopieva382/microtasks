type TopCarsType = {
  topCars: CarsType[];
};

type CarsType = {
  manufacturer: string;
  model: string;
};
export const TopCars = (props: TopCarsType) => {
  return (
    <table>
      {props.topCars.map((el, index) => {
        return (
          <tbody key={index}>
            <tr>
              <td>{el.manufacturer}</td>
              <td>{el.model}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
