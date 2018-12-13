// 历史 搜索记录
export function localHistory(){
    let strKey='history';
    let searches=[];
    if(localStorage.getItem(strKey)==null){
      return;
    }
    searches=JSON.parse(localStorage.getItem(strKey));
    return searches;
}


function insertArray (arr, val,maxLen) {
    const index = arr.findIndex((item)=>{
      return item === val;
    });
    if (index === 0) {//在第一个
      return;
    }
    if (index > 0) {
      arr.splice(index, 1);
    }
    arr.unshift(val);
    if (maxLen && arr.length > maxLen) {
      arr.pop();
    }
}
// 添加搜索记录
export function addHistory(keyWord){
    let SEARCH_MAX_LEANGTH=10;
    let strKey='history';
    let searches=[];
    if(localStorage.getItem(strKey)==null){
      localStorage.setItem(strKey,JSON.stringify([]));
    }
    searches=JSON.parse(localStorage.getItem(strKey));
    insertArray(searches,keyWord,SEARCH_MAX_LEANGTH);
    localStorage.setItem(strKey,JSON.stringify(searches));
    return searches;
}

function deleteFromArray (arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
export function deleteSearch (keyWord) {
  let strKey='history';
  let searches=[];
  if(localStorage.getItem(strKey)==null){
    localStorage.setItem(strKey,JSON.stringify([]));
  }
  searches=JSON.parse(localStorage.getItem(strKey));
  deleteFromArray(searches, (item) => {
    return item === keyWord;
  })
  localStorage.setItem(strKey,JSON.stringify(searches));
  return searches;
}