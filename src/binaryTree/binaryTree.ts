import { BinaryNode } from './binaryNode';

export enum TraversalType {
  InOrder = 'InOrder',
  PreOrder = 'PreOrder',
  PostOrder = 'PosTOrder',
}

const traversalInOrder = (node: BinaryNode<string>, visitFn) => {
  if (node === null) {
    return;
  }
  traversalInOrder(node.left, visitFn);
  visitFn(node);
  traversalInOrder(node.right, visitFn);
};

const traversalPreOrder = (node: BinaryNode<string>, visitFn) => {
  if (node === null) {
    return;
  }
  visitFn(node);
  traversalPreOrder(node.left, visitFn);
  traversalPreOrder(node.right, visitFn);
};

const traversalPostOrder = (node: BinaryNode<string>, visitFn) => {
  if (node === null) {
    return;
  }
  traversalPostOrder(node.left, visitFn);
  traversalPostOrder(node.right, visitFn);
  visitFn(node);
};

const traversalFs = {
  [TraversalType.InOrder]: traversalInOrder,
  [TraversalType.PreOrder]: traversalPreOrder,
  [TraversalType.PostOrder]: traversalPostOrder,
};

export class BinaryTree<T> {
  public root: BinaryNode<T> = null;

  constructor(rootKey) {
    this.root = new BinaryNode(rootKey);
  }

  public print(traversalType = TraversalType.InOrder): string {
    let res = '';
    function visitFn(node) {
      res += res.length === 0 ? node.key : ` => ${node.key}`;
    }

    traversalFs[traversalType](this.root as any, visitFn);

    return res;
  }
}
