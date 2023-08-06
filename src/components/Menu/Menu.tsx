import React, { useContext } from "react";
import Ship from "../Ship/Ship";
import StartGame from "../StartGame/StartGame";
import PlayfieldContext from "../Playground/Playground.context";

const Menu: React.FC = () => {
  const { initialShip } = useContext(PlayfieldContext);
  const { shape1, shape2, shape3, shape4 } = initialShip;

  return (
    <div className={"column"}>
      <div className={"ui vertical buttons"}>
        <Ship {...shape1} />
        <Ship {...shape2} />
        <Ship {...shape3} />
        <Ship {...shape4} />
      </div>
      <div className={"ui divider"}></div>
      <StartGame />
    </div>
  );
};

export default Menu;
