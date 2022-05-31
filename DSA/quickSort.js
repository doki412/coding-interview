//快速排序 O(n*logn)

//对arr[l]到arr[r]部分进行partition操作
//返回p使得arr[l...p-1]< arr[p], arr[p]< arr[p+1...r]
const partition = (arr, l, r) => {
  const pivot = arr[l];
  let p = l;
  for (let i = l + 1; i < r; i++) {
    if (arr[i] < pivot) {
      const temp = arr[p + 1];
      arr[p + 1] = arr[i];
      arr[i] = temp;
      p++;
    }
  }
  const temp = arr[l];
  arr[l] = arr[p];
  arr[p] = temp;
  return p;
};

const quickSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }
  const p = partition(arr, l, r);
  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);
};
