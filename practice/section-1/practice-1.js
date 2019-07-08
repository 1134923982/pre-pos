'use strict';

function collectSameElements(collectionA, collectionB) {
  let result=[];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.length;j++){
      if(collectionA[i]==collectionB[j]&&result.indexOf(collectionA[i]==-1)){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
