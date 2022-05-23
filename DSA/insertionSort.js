//插入排序 O(n*n)
const InsertionSort = (arr, n) => {
  for (let i = 1; i < arr.length; i++) {

    //寻找元素arr[i]合适的插入位置
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
    }
  }
}