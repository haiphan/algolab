import { Node } from './node';

export class Tree<T> {
  public root: Node<T>;

  constructor(rootKey: T) {
    this.root = new Node(rootKey);
  }

  public print() {
    let res = '';

    function traverse(node, visitFn, depth) {
      visitFn(node, depth);
      node.children.forEach((n) => traverse(n, visitFn, depth + 1));
    }

    function addKeyToRes(node, depth) {
      res += res.length === 0 ?
        node.key :
        `\n${' '.repeat(depth * 2)}${node.key}`;
    }

    traverse(this.root, addKeyToRes, 0);
    return res;
  }

}
