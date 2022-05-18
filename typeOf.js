//实现typeOf 可以判断所有类型
export function typeOf(obj){
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}