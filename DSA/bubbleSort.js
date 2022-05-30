//冒泡排序 平均复杂度 O(n*n)
const bubbleSort1 = (arr) => {
  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
};

//优化，如果某次冒泡循环没有任何两数交换，那么说明已经排序好，可以由此减少之后不必要的循环
const bubbleSort2 = (arr) => {
  for (let j = 0; j < arr.length - 1; j++) {
    let sorted = true;
    for (let i = 0; i < arr.length - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
  }
};
