import React from "react";
import { GridType } from "../Grid/Grid";
import { greetingWords, initialShipSetup } from "../../constants";

interface IPlayfieldContext {
  greetingWords: typeof greetingWords;
  grid: GridType;
  setPosition: (ship: GridType) => void;
  shapedShip: [number, number];
  setFirstPosition: (rowIndex: number, colIndex: number) => void;
  selectedShapeShip: number;
  setSelectedShapeShip: React.Dispatch<React.SetStateAction<number>>;
  initialShip: typeof initialShipSetup;
  isAllShipsReady: boolean;
  shootPosition: ([rowIndex, colIndex]: [number, number]) => void;
}

const PlayfieldContext = React.createContext<IPlayfieldContext>({
  greetingWords,
  grid: [],
  setPosition: () => {},
  shapedShip: [0, 0],
  setFirstPosition: () => {},
  selectedShapeShip: 0,
  setSelectedShapeShip: () => {},
  initialShip: initialShipSetup,
  isAllShipsReady: true,
  shootPosition: () => {},
});

export default PlayfieldContext;
