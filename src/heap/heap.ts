export class Heap {
  private data: number[] = [];

  private getLeftChildIndex(index: number): number {
    return (2 * index) + 1;
  }
  private getRightChildIndex(index: number): number {
    return (2 * index) + 2;
  }
  private getParentIndex(index: number): number {
    return index % 2 === 0
      ? (index - 2) / 2
      : (index - 1) / 2;
  }

  public add(element: number) {
    this.data.push(element);
    this.siftUp(this.data.length - 1);
  }

  private siftUp(index: number) {
    const parentIndex = this.getParentIndex(index);
    if (index <= 0 || this.data[index] >= this.data[parentIndex]) {
      return;
    }
    [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
    this.siftUp(parentIndex);
  }

  private siftDown(index: number) {
    const leftIndex = this.getLeftChildIndex(index);
    const rightIndex = this.getRightChildIndex(index);
    const dataLen = this.data.length;
    if (leftIndex >= dataLen) {
      return;
    }
    if (rightIndex >= dataLen) {
      if (this.data[index] > this.data[leftIndex]) {
        [this.data[index], this.data[leftIndex]] = [this.data[leftIndex], this.data[index]];
        return this.siftDown(leftIndex);
      }
      return;
    }
    const minValue = Math.min(this.data[leftIndex], this.data[rightIndex], this.data[index]);
    if (minValue === this.data[index]) {
      return;
    }
    if (minValue === this.data[leftIndex]) {
      [this.data[index], this.data[leftIndex]] = [this.data[leftIndex], this.data[index]];
      return this.siftDown(leftIndex);
    }
    [this.data[index], this.data[rightIndex]] = [this.data[rightIndex], this.data[index]];
    return this.siftDown(rightIndex);
  }

  public extractRoot(): number | undefined {
    if (this.data.length > 0) {
      const root = this.data[0];
      const last = this.data.pop();
      if (this.data.length > 0) {
        this.data[0] = last;
        this.siftDown(0);
      }
      return root;
    }
    return null;
  }

  public size(): number {
    return this.data.length;
  }

  public peek(): number|null {
    return this.data.length > 0 ? this.data[0] : null;
  }

}
