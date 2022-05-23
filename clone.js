
//浅拷贝
const cloneShallow = (originalObj) => {
  let copyObj = {}
  for (const key in target) {
    copyObj[key] = originalObj[key]
  }
  return copyObj
}

//深拷贝

//1.极简版本，缺陷：a. bigint会报错 b. function被忽略 c. symbol键被忽略
const cloneDeep1 = (originalObj) => JSON.parse(JSON.stringify(originalObj))

//2.递归实现简单版本
const cloneDeep2 = (origin) => {
  if (typeof origin === 'object') {
    let copyObj = {}
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        copyObj[key] = cloneDeep2(origin[key])
      }
    }
    return copyObj
  }
  return origin
}

//3.递归实现（考虑数组）
const cloneDeep3 = (origin) => {
  if (typeof origin === 'object') {
    let copyObj = Array.isArray(origin) ? [] : {}
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        copyObj[key] = cloneDeep3(origin[key])
      }
    }
    return copyObj
  } else {
    return origin
  }
}

//4.解决循环引用问题
// 额外开辟内存空间存储当前对象和拷贝对象的关系，需要拷贝当前对象时先查看是否拷贝过这个对象；
// 如果有，直接返回，如果没有，则继续拷贝
const cloneDeep4 = (origin, map = new Map()) => {
  if (typeof origin === 'object') {
    if (map.get(origin)) {
      return map.get(origin)
    }
    let copyObj = Array.isArray(origin) ? [] : {}
    map.set(origin, copyObj)
    for (const key in origin) {
      if (Object.hasOwnProperty.call(origin, key)) {
        copyObj[key] = cloneDeep4(origin[key], map);
      }
    }
    return copyObj
  } else {
    return origin
  }
}


const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};
target.target = target;
console.log(cloneDeep4(target))



// export { cloneDeep1, cloneDeep2, cloneDeep3, cloneDeep4 }
