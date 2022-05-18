//new实现
function myTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

const myNew = (constructor, ...args) => {
  if (typeof constructor !== 'function') {
    throw ("the first parameter is not a constructor function")
  }
  let instance = Object.create(constructor.prototype) // 原型指向constructor.prototype

  //如果constructor返回值是object或者function，那么new返回constructor返回值
  const result = constructor.apply(instance, args)  // this指向instance
  const resultType = myTypeOf(result)
  if (resultType === "function" || resultType === "object") {
    return result
  }
  return instance
}
