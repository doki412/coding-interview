//es6 flat实现
function flatten(arr){
  while(arr.some((item) => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}