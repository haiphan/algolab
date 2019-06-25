export class BinaryNode<T> {
  private key: T;
  public left: BinaryNode<T> = null;
  public right: BinaryNode<T> = null;

  constructor(key) {
    this.key = key;
  }

  public addLeft(key: T): BinaryNode<T> {
    const node: BinaryNode<T> = new BinaryNode(key);
    this.left = node;
    return node;
  }

  public addRight(key: T): BinaryNode<T> {
    const node: BinaryNode<T> = new BinaryNode(key);
    this.right = node;
    return node;
  }
}
