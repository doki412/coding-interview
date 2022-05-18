//new实现
function Person(name, age) {
  this.name = name
  this.age = age

}
Person.prototype.say = () => {
  console.log('I am a person')
}
const myNew = (constructor, ...args) => {
  if (typeof constructor !== 'function') {
    throw ("the first parameter is not a constructor function")
  }
  let instance = Object.create(constructor.prototype) // 原型指向constructor.prototype
  constructor.apply(instance, args)
  return instance
}

let joey=myNew(Person, 'joey wong', '26')
console.log(joey)
joey.say()