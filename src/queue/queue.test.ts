import { Queue } from './queue';

test('Queue should work', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  expect(q.size()).toEqual(2);
  const item = q.dequeue();
  expect(item).toEqual(1);
  expect(q.size()).toEqual(1);
});
