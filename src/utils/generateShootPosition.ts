import { GridType } from "../components/Grid/Grid";

export default function generateShootPosition(
  grid: GridType,
): [number, number] {
  // Generate shoot with random coords
  // Retuns array with y and x coords [0,0]

  const rowIndex: number = Math.floor(Math.random() * 10);
  const colIndex: number = Math.floor(Math.random() * 10);

  if (grid[rowIndex][colIndex] === 3 || grid[rowIndex][colIndex] === 2) {
    // If this cell has already been shot, takes another shot
    return generateShootPosition(grid);
  }

  return [rowIndex, colIndex];
}
