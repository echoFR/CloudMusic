function getRandomNum(min,max){
    return Math.floor((Math.random()*(max - min +1))+ min);
}
export function shuffle(arr){
    let _arr = arr.slice(0);
        for (let i = 0; i < arr.length; i++) {
          let j = getRandomNum(0, i);
          let t = _arr[i];
          _arr[i] = _arr[j];
          _arr[j] = t;
        }
    return _arr;
}
export function debounce (func, delay) {
    let timer
    return function (...args) {
        if (timer) {
        clearTimeout(timer)
        }
        timer = setTimeout(() => {
        func.apply(this, args)
        }, delay)
    }
}
export function throttle(fn,delay){
    let startTime = 0;
    return (...args) => {
        let timeNow = +new Date();
        if(timeNow - startTime >= delay){
            fn(...args);
            startTime = timeNow;
        }
    }
}

export function CheckEmptyStr(string){
    if (string.replace(/(^\s*)|(\s*$)/g, "").length ==0)
    {
        return true;
    }
    return false;
}