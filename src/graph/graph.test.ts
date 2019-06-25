import { Graph } from './graph';

test('Graph should work', () => {
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

test('Graph BFS should work', () => {
  const graph = new Graph(true);
  const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
  const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e']
  ];
  nodes.forEach((n) => {
    graph.addNode(n);
  });

  edges.forEach(([n1, n2]) => {
    graph.addEdge(n1, n2);
  });
  const expected = ['a', 'b', 'e', 'f', 'd', 'c'];
  let i = 0;
  graph.bfs('a', (n) => {
    console.log('visited', n.key);
    expect(n.key).toEqual(expected[i]);
    i++;
  });
});
