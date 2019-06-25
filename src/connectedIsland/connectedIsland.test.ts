import { getBiggestArea } from './connectedIsland';

test('Should work calculate biggest area', () => {
  const matrix = [
    [0,0,0,1,1,0,0],
    [0,1,0,0,1,1,0],
    [1,1,0,1,0,0,1],
    [0,0,0,0,0,1,0],
    [1,1,0,0,0,0,0],
    [0,0,0,1,0,0,0]
  ];
  expect(getBiggestArea(matrix)).toEqual(7);

  const matrix2 = [
    [0,0,0,1,1,0,0],
    [0,1,0,0,1,1,0],
    [1,1,0,1,0,0,1],
    [0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0],
    [0,0,0,1,0,0,0]
  ];
  expect(getBiggestArea(matrix2)).toEqual(8);
});
