'use strict';

function collectSameElements(collectionA, objectB) {
  let result=[]
  for(let i=0;i<collectionA.length;i++){
    for(let key in objectB){
      if(objectB[key].indexOf(collectionA[i].key)>=0&&result.indexOf(collectionA[i].key)==-1){
        result.push(collectionA[i].key);
      }
    }
  }
  return result;
}