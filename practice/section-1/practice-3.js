'use strict';

function collectSameElements(collectionA, objectB) {

  let result=[];
   for(let i=0;i<collectionA.length;i++){
       for(let key in objectB){
         if(objectB[key].indexOf(collectionA[i])>=0&&result.indexOf(collectionA)==-1){
            result.push(collectionA[i]);
         }
    }
   }
  return result;
}