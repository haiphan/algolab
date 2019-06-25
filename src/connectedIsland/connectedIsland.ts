
// get area of the island, given the matrix and one coordinate
const getArea = (matrix: number[][], row: number, col: number): number => {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
    return 0;
  }
  if (matrix[row][col] === 0) {
    return 0;
  }

  let area = 1;
  // we already take this cell into acc. So we can clear it
  // this prevent redundant calculation of the area
  matrix[row][col] = 0;

  // calculate size of cells around this cell. And add to its own area
  const nbDelta = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1],
  ];
  nbDelta.forEach(([dr,dc]) => {
    area += getArea(matrix, row + dr, col + dc);
  });
  return area;
};

export const getBiggestArea = (origMatrix: number[][]): number => {
  const matrix = origMatrix.map((r) => [...r]);
  let maxArea = 0;
  const N = matrix.length;
  const M = matrix[0].length;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (matrix[r][c] === 1) {
        const area = getArea(matrix, r, c);
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};
