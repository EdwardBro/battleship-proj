import React, { useContext } from "react";
import "./Grid.css";
import PlayfieldContext from "../Playground/Playground.context";
import isAlreadyShipLogic from "../../utils/isAlreadyShipLogic";

export type GridType = number[][];

const Grid: React.FC = () => {
  const { grid, setFirstPosition } = useContext(PlayfieldContext);

  // Render onscreen grid
  const createGrid = grid.map(
    (row: number[], rowIndex: number): JSX.Element => {
      // Check if ship there
      const isAlreadyShipThere = (
        cell: number,
        rowIndex: number,
        colIndex: number
      ): void => {
        if (isAlreadyShipLogic(cell, grid, rowIndex, colIndex)) {
          setFirstPosition(rowIndex, colIndex);
        }
      };

      return (
        <div key={rowIndex} className={"Grid-row"}>
          {row.map((cell, colIndex) => {
            return (
              <div
                key={colIndex}
                className={`Grid-cell ${
                  cell === 1
                    ? "Ship-color"
                    : cell === 2
                    ? "Ship-sunk"
                    : cell === 3
                    ? "Cell-shot-color"
                    : "Empty-cell-color"
                }`}
                onClick={() => isAlreadyShipThere(cell, rowIndex, colIndex)}
              ></div>
            );
          })}
        </div>
      );
    }
  );

  return <div className={"column"}>{createGrid}</div>;
};

export default Grid;
