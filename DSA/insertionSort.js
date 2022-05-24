//插入排序 O(n*n) 在近乎有序的数组中排序很高效
const InsertionSort1 = (arr, n) => {
  for (let i = 1; i < arr.length; i++) {

    //寻找元素arr[i]合适的插入位置
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
    }
  }
}

//优化版
const InsertionSort2 = (arr, n) => {
  for (let i = 1; i < arr.length; i++) {
    let e = arr[i]
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}