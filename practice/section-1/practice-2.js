'use strict';

function collectSameElements(collectionA, collectionB) {
    let result=[];
    for(let i=0;i<collectionA.length;i++){
      for(let j=0;j<collectionB.length;j++){
        if(collectionB[j].indexOf(collectionA[i])>=0&&result.indexOf(collectionA[i])){
          result.push(collectionA[i]);
        }
      }
    }
    return result;
}
