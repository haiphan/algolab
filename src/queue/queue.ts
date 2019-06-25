export class Queue<T> {
  private data: { [index: number]: T } = {};
  private nextEnqueueIndex = 0;
  private lastDequeuedIndex = 0;

  /** Enqueues the item in O(1) */
  public enqueue(item: T): void {
    this.data[this.nextEnqueueIndex] = item;
    this.nextEnqueueIndex++;
  }

  /**
   * Dequeues the first inserted item in O(1)
   * If there are no more items it returns null
   */
  public dequeue(): T | undefined {
    if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
      const dequeued = this.data[this.lastDequeuedIndex] || null;
      delete this.data[this.lastDequeuedIndex];
      this.lastDequeuedIndex++;
      return dequeued;
    }
  }

  /**
   * Returns the number of elements in the queue
   */
  public size(): number {
    return this.nextEnqueueIndex - this.lastDequeuedIndex;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

}
