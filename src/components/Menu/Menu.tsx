import React, { useContext } from "react";
import Ship from "../Ship/Ship";
import StartGame from "../StartGame/StartGame";
import PlayfieldContext from "../Playground/Playground.context";

const Menu: React.FC = () => {
  const { initialShip } = useContext(PlayfieldContext);
  const { shape1, shape2, shape3, shape4 } = initialShip;
  const shipShapesArray = [shape1, shape2, shape3, shape4];

  return (
    <div className={"column"}>
      <div className={"ui vertical buttons"}>
        {shipShapesArray.map((shape, index) => (
          <Ship key={index} {...shape} />
        ))}
      </div>
      <div className={"ui divider"}></div>
      <StartGame />
    </div>
  );
};

export default Menu;
