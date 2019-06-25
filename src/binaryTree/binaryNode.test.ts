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
