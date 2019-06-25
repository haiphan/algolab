import { BinaryTree, TraversalType } from './binaryTree';

test('Binary tree should work', () => {
  const tree = new BinaryTree('a');
  const a = tree.root;
  const b = a.addLeft('b');
  const c = a.addRight('c');
  const d = b.addLeft('d');
  const e = b.addRight('e');
  const f = c.addLeft('f');
  const g = c.addRight('g');
  const h = d.addLeft('h');
  const i = d.addRight('i');
  const io = tree.print(TraversalType.InOrder);
  expect(io.includes('i => b => e')).toBeTruthy();
  const pr = tree.print(TraversalType.PreOrder);
  expect(pr.includes('d => h => i')).toBeTruthy();
  const po = tree.print(TraversalType.PostOrder);
  expect(po.includes('i => d => e')).toBeTruthy();
});

test('Binary tree topview should work', () => {
  const tree = new BinaryTree(1);
  const a = tree.root;
  const b = a.addLeft(2);
  const c = a.addRight(3);
  const e = b.addRight(4);
  const f = e.addRight(5);
  const g = f.addRight(6);
  const expected = [2,1,3,6];
  let i = 0;
  tree.topView((key) => {
    expect(Number(key)).toEqual(expected[i]);
    i++;
  });
});
