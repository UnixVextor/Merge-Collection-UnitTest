const mergArray = (arr1: number[], arr2: number[]) => {
  const merged: number[] = [];

  let idx_arr1 = 0;
  let idx_arr2 = 0;

  while (idx_arr1 < arr1.length && idx_arr2 < arr2.length) {
    if (arr1[idx_arr1] < arr2[idx_arr2]) {
      merged.push(arr1[idx_arr1]);
      idx_arr1++;
    } else {
      merged.push(arr2[idx_arr2]);
      idx_arr2++;
    }
  }

  while (idx_arr1 < arr1.length) {
    merged.push(arr1[idx_arr1]);
    idx_arr1++;
  }

  while (idx_arr2 < arr2.length) {
    merged.push(arr2[idx_arr2]);
    idx_arr2++;
  }

  return merged;
};

// function to merge array
export const merge = (
  collection1: number[],
  collection2: number[],
  collection3: number[],
) => {
  const collection2_reversed = collection2.slice().reverse();
  const merge_collec_1_2 = mergArray(collection1, collection2_reversed);
  return mergArray(merge_collec_1_2, collection3);
};
