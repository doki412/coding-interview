//归并排序 O(n*logn) 需要额外O(n)的空间

//将arr[l...mid]和arr[mid+1...r]两部分进行归并
const __merge = (arr, l, mid, r) => {
  let aux = []
  for (let i = l; i < r + 1; i++) {
    aux[i - l] = arr[i]
  }
  let i = l, j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}
//递归使用归并排序，对arr[l...r]范围进行排序
const __mergeSort = (arr, l, r) => {
  if (l >= r) {
    return
  }
  const mid = (l + r) / 2;
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  __merge(arr, l, mid, r)
}

const mergeSort = (arr) => {
  __mergeSort(arr, 0, arr.length - 1)
}

//__mergeSort优化
const __mergeSort1 = (arr, l, r) => {
  if (l >= r) {
    return
  }
  const mid = (l + r) / 2;
  __mergeSort1(arr, l, mid)
  __mergeSort1(arr, mid + 1, r)
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r)
  }
}

//利用插入排序优化
const __insertionSort = (arr, l, r) => {
  for (let i = l + 1; i <= r; i++) {
    e = arr[i]
    let j;
    for (j = i; j > l && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}
const __mergeSort2 = (arr, l, r) => {
  if (r - l <= 15) {
    __insertionSort(arr, l, r)
  }
  const mid = (l + r) / 2;
  __mergeSort2(arr, l, mid)
  __mergeSort2(arr, mid + 1, r)
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r)
  }
}