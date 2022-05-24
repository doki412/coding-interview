//选择排序 o(n*n)
const selectionSort = (arr) => {
  let minIndex;
  for (let i = 0; i < arr.length-1; i++) {
    minIndex = i;
    for (let j = i +1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    const temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}
