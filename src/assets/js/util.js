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

// export function throttle(func, wait) {
//     var timeout;
//     var previous = 0;

//     return function() {
//         context = this;
//         args = arguments;
//         if (!timeout) {
//             timeout = setTimeout(function(){
//                 timeout = null;
//                 func.apply(context, args)
//             }, wait)
//         }

//     }
// }
export function throttle(func, wait) {
    var timeout, context, args, result;
    var previous = 0;

    var later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    };

    var throttled = function() {
        var now = +new Date();
        //下次触发 func 剩余的时间
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
         // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}

export function CheckEmptyStr(string){
    if (string.replace(/(^\s*)|(\s*$)/g, "").length ==0)
    {
        return true;
    }
    return false;
}

export function changeFont(){
    const desW= 375,
    winW= document.documentElement.clientWidth,
    ratio= winW / desW;
    const mainW = document.getElementById('app-box');
    if(winW > desW){
      mainW.style.width= desW+ 'px';
      mainW.style.margin= '0 auto';
      return
    }
    document.documentElement.style.fontSize = ratio * 100 +'px';
}