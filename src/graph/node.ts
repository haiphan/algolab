export class Node<T> {
  public key: T;
  public children: Array<Node<T>> = [];

  constructor(key) {
    this.key = key;
  }

  public addChild(node: Node<T>) {
    this.children.push(node);
  }
}
