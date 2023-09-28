import React, { useContext, useEffect } from "react";
import "./ShipButton.css";
import PlayfieldContext from "../Playground/Playground.context";
import checkBoundaries from "../../utils/checkBoundaries";

interface IShip {
  label: string;
  count: number;
  cellSize: number;
}

const Ship: React.FC<IShip> = ({ label, count, cellSize }) => {
  const {
    shapedShip,
    grid,
    setPosition,
    selectedShapeShip,
    setSelectedShapeShip,
  } = useContext(PlayfieldContext);

  // Create ship
  const createShapedShip = (type: number): [number, number][] => {
    const isVertical = Math.floor(Math.random() * 2); // returns number 0,1 (false | true)
    const xCoord = shapedShip[0];
    const yCoord = shapedShip[1];

    const isRowOutOfPlayfield =
      xCoord + cellSize > grid.length - 1 || !(xCoord - cellSize < 0) ? -1 : 1;
    const isColOutOfPlayfield =
      yCoord + cellSize > grid[0].length - 1 || !(yCoord - cellSize < 0)
        ? -1
        : 1;

    const ship: [number, number][] = new Array(cellSize)
      .fill([xCoord, yCoord])
      .map(([x, y], index) => [
        isVertical ? x + index * isRowOutOfPlayfield : x,
        isVertical ? y : y + index * isColOutOfPlayfield,
      ]);

    return ship.some(([rowIndex, colIndex]) =>
      checkBoundaries(grid, rowIndex, colIndex)
    )
      ? createShapedShip(type)
      : ship;
  };

  const onClickShipButtonHandler = () => {
    // Set selected ship type (1,2,3,4) on grid
    setSelectedShapeShip(cellSize);
  };

  useEffect(() => {
    if (shapedShip[0] !== undefined && selectedShapeShip === cellSize) {
      let ship: [number, number][] = [];

      if (selectedShapeShip === 1) {
        ship = [shapedShip];
      } else if ([2, 3, 4].includes(selectedShapeShip)) {
        ship = createShapedShip(selectedShapeShip);
      } else {
        ship = [];
      }

      setPosition(ship);
      setSelectedShapeShip(0); // set selected ship type (1,2,3,4) on grid
    }
  }, [shapedShip[0], shapedShip[1]]);

  return (
    <button
      onClick={onClickShipButtonHandler}
      className={"Ship-button ui blue button"}
      disabled={!count}
    >
      {label}
      <span className={"Ship-count"}>{count}</span>
    </button>
  );
};

export default Ship;
