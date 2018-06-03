function throttle(fn,delay){
    let startTime = 0;
    return (...args) => {
        let timeNow = +new Date();
        if(timeNow - startTime >= delay){
            fn(...args);
            startTime = timeNow;
        }
    }
}
export default throttle;