
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