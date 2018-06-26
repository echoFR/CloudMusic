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