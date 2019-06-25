import { BinaryNode } from './binaryNode';
import { Queue } from '../queue/queue';

export enum TraversalType {
  InOrder = 'InOrder',
  PreOrder = 'PreOrder',
  PostOrder = 'PosTOrder',
}

interface NodeWithHDInterface {
  node: BinaryNode<any>;
  hd: number;
}

interface KeyHDInterface {
  hd: number;
  key: any;
}

const topViewHelper = (root: BinaryNode<any>, height: number, hd: number, hdMap: object) => {
  if (!root) {
    return;
  }
  if (!hdMap[hd]) {
    hdMap[hd] = {key: root.key, height};
  } else {
    const curHeight = hdMap[hd].height;
    if (curHeight > height) {
      hdMap[hd] = {key: root.key, height};
    }
  }
  topViewHelper(root.left, height + 1, hd - 1, hdMap);
  topViewHelper(root.right, height + 1, hd + 1, hdMap);
};

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

  public topView(visitFn) {
    const {root} = this;
    const hdMap = {};
    topViewHelper(root, 0, 0, hdMap);
    const sortedHd = Object.keys(hdMap).map((i) => Number(i));
    sortedHd.sort();
    sortedHd.forEach((hd) => {
      const {key} = hdMap[hd];
      visitFn(key);
    });
  }

}
