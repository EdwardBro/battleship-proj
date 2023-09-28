// Greeting words
export const greetingWords = {
  title: "Battleship Game",
  description:
    "Please select ships to set them on the grid, then start to attack.",
};

// Initial ships setup
export const initialShipSetup = {
  shape1: {
    label: "Patrol boat",
    count: 4,
    cellSize: 1,
  },
  shape2: {
    label: "Destroyer",
    count: 3,
    cellSize: 2,
  },
  shape3: {
    label: "Cruiser",
    count: 2,
    cellSize: 3,
  },
  shape4: {
    label: "Battleship",
    count: 1,
    cellSize: 4,
  },
  allShipsCount: 10,
};

//Messages
export enum GAME_MESSAGE {
  WIN = "Enemy ships have sunk and game is over! You have won!",
  LOOSE = "Your ships have sunk and game is over! You have lost!",
}
