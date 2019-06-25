import { Graph } from './graph';

test('findMinJump should work', () => {
  const graph = new Graph(true);
  graph.addNode(1);
  graph.addNode(2);
  graph.addNode(3);
  graph.addNode(4);

  graph.addEdge(1, 2);
  graph.addEdge(2, 1);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 4);
  graph.addEdge(3, 1);
  graph.addEdge(4, 2);
  const pStr = graph.print();
  expect(pStr.includes('3=>1')).toBeTruthy();

});
