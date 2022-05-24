//函数柯里化
//比较多次接受的参数总数与函数定义时的入参数量，当接受参数的数量大于或等于被 Currying 函数的传入参数数量时，
// 就返回计算结果，否则返回一个继续接受参数的函数。
const currying = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args)
  }
  return function (...args2) {
    return currying(fn, ...args, ...args2)
  }
}