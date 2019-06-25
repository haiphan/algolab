import { Node } from './node';
import { Queue } from '../queue/queue';

export class Graph<T> {
  private nodes: Array<Node<T>> = [];
  private edges: string[] = [];
  private readonly directed: boolean = false;
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

  public bfs(rootKey: T, visitFn) {
    const root: Node<string> = this.getNode(rootKey) as any;
    const visitMap = this.nodes.reduce((acc, n) => {
      const key = n.key as any;
      return {...acc, [key]: false};
    }, {});
    const q: Queue<Node<string>> = new Queue();
    q.enqueue(root);

    while (!q.isEmpty()) {
      const cur = q.dequeue();
      if (!visitMap[cur.key]) {
        visitFn(cur);
        visitMap[cur.key] = true;
      }
      cur.children.forEach((c) => {
        !visitMap[c.key] && q.enqueue(c);
      });
    }
  }
}
