export class Node<T> {
  public key: T;
  public children: Array<Node<T>> = [];

  constructor(key) {
    this.key = key;
  }

  public addChild(key: T): Node<T> {
    const node: Node<T> = new Node(key);
    this.children.push(node);
    return node;
  }
}
