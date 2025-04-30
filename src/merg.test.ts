import { merge } from "./merg";

test("merged sorted array", () => {
  const collection1 = [1, 3, 5];
  const collection2 = [11, 9, 7, 4, 2];
  const collection3 = [6, 8, 10, 12];
  const result_merge = merge(collection1, collection2, collection3);
  expect(result_merge).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
});
