function getRandomNum(max,min){
    return Math.floor((Math.random()*(max - min +1))+ min);
}
// 打乱
export function shuffle(arr){
    for(let i=0;i<arr.length;i++){
        let j=getRandomNum(0,i);
        let t=arr[i];
        arr[i]=arr[j];
        arr[j]=t;
    }
    return arr;
}