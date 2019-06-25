import { Tree } from './tree';

test('Graph should work', () => {
  const tree = new Tree('html');
  const dom = tree.root;
  const head = dom.addChild('head')
  const body = dom.addChild('body')
  const title = head.addChild('title - my tree structure')
  const header = body.addChild('header')
  const main = body.addChild('main')
  const footer = body.addChild('footer')
  const h1 = header.addChild('h1 - Tree Data')
  const p = main.addChild('p - Learn about trees!')
  const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)
  const res = tree.print();
  expect(res.includes('Learn')).toBeTruthy();
});
