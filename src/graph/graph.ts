import { Node } from './node';

export class Graph<T> {
  private nodes: Array<Node<T>> = [];
  private edges: string[] = [];
  private directed: boolean = false;
  constructor(directed = false) {
    this.directed = directed;
  }
  public addNode(key: T) {
    this.nodes.push(new Node(key));
  }
  public getNode(key: T): Node<T> {
    return this.nodes.find((n) => n.key === key);
  }
  public addEdge(k1: T, k2: T) {
    const node1 = this.getNode(k1);
    const node2 = this.getNode(k2);
    node1.addChild(node2);
    if (!this.directed) {
      node2.addChild(node1);
    }
    this.edges.push(`${k1}-${k2}`);
  }
  public print(): string {
    return this.nodes.map((n) => {
      const {children, key} = n;
      const begin = `${key}`;
      const padding = children.length ?
        `=>${children.map((cn) => cn.key).join(' ')}` :
        '';
      return `${begin}${padding}`;
    }).join('\n');
  }
}
