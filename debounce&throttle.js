// debounce
const debounce = (func, delay) => {
  let timer //闭包缓存上次的timerId
  return function () {
    const args = arguments
    clearTimeout(timer)	//清除上次timer，防止每次调用新增timer
    timer = setTimeout(() => {
      func.apply(this, args)	//绑定this，否则this指向window
    }, delay)
  }
}

//throttle
const throttle = (func, delay) => {
  let t1 = 0  //初始时间
  return function() {
    const t2 = Number(new Date()) //当前时间
    if (t2 - t1 > delay) {
      func.apply(this, arguments)
      t1 = t2
    }
  }
}