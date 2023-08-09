import React, { useContext, useEffect } from "react";
import "./Ship.css";
import PlayfieldContext from "../Playground/Playground.context";
import checkBoundaries from "../../utils/checkBoundaries";

interface InShip {
  label: string;
  count: number;
  cellSize: number;
}

const Ship: React.FC<InShip> = ({ label, count, cellSize }) => {
  const {
    shapedShip,
    grid,
    setPosition,
    selectedShapeShip,
    setSelectedShapeShip,
  } = useContext(PlayfieldContext);

  // Create ship
  const createShapedShip = (type: number) => {
    const isBottomToTop = Math.floor(Math.random() * 2); // returns number 0,1 (false | true)
    const isVertical = Math.floor(Math.random() * 2); // returns number 0,1 (false | true)
    const xCoord = shapedShip[0];
    const yCoord = shapedShip[1];

    const isRowOutOfPlayfield =
      xCoord + cellSize > grid.length - 1 || !(xCoord - cellSize < 0) ? -1 : 1;
    const isColOutOfPlayfield =
      yCoord + cellSize > grid[0].length - 1 || !(yCoord - cellSize < 0)
        ? -1
        : 1;

    let ship: [number, number][] = [];

    if (type === 2) {
      ship = new Array(cellSize)
        .fill([xCoord, yCoord])
        .map(([xCoord, yCoord], index) => [
          isVertical ? xCoord + index * isRowOutOfPlayfield : xCoord,
          isVertical ? yCoord : yCoord + index * isColOutOfPlayfield,
        ]);

      return ship.some(([rowIndex, colIndex]) => {
        return checkBoundaries(grid, rowIndex, colIndex);
      })
        ? []
        : ship;
    }
    if (type === 3) {
      ship = new Array(cellSize)
        .fill([xCoord, yCoord])
        .map(([xCoord, yCoord], index) => [
          isVertical ? xCoord + index * isRowOutOfPlayfield : xCoord,
          isVertical ? yCoord : yCoord + index * isColOutOfPlayfield,
        ]);

      return ship.some(([rowIndex, colIndex]) => {
        return checkBoundaries(grid, rowIndex, colIndex);
      })
        ? []
        : ship;
    }
    if (type === 4) {
      ship = new Array(cellSize)
        .fill([xCoord, yCoord])
        .map(([xCoord, yCoord], index) => [
          isVertical ? xCoord + index * isRowOutOfPlayfield : xCoord,
          isVertical ? yCoord : yCoord + index * isColOutOfPlayfield,
        ]);

      return ship.some(([rowIndex, colIndex]) => {
        return checkBoundaries(grid, rowIndex, colIndex);
      })
        ? []
        : ship;
    }

    return ship;
  };

  const onClickShipButtonHandler = () => {
    // Set selected ship type (1,2,3,4) on grid
    setSelectedShapeShip(cellSize);
  };

  useEffect(() => {
    if (shapedShip[0] !== undefined && selectedShapeShip === cellSize) {
      let ship: [number, number][] = [];

      switch (selectedShapeShip) {
        case 1:
          ship = [shapedShip];

          break;
        case 2:
          ship = createShapedShip(selectedShapeShip);

          break;
        case 3:
          ship = createShapedShip(selectedShapeShip);

          break;
        case 4:
          ship = createShapedShip(selectedShapeShip);

          break;
        default:
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
