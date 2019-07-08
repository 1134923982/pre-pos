'use strict';

function createUpdatedCollection(collectionA, objectB) {
	let result=[];
	for(let i=0;i<collectionA.length;i++){
		if(i==0){
			let t={};
			t.key=collectionA[i];
			t.count=1;
			result.push(t);
			continue;
		}
		for(let j=0;j<result.length;j++){
			if(result[j].key==collectionA[i]){
				result[j].count++;
				break;
			}
			if(j===result.length-1){
				let t={};
				t.key=collectionA[i];
				t.count=1;
				result.push(t);
				break;
			}
		}
	}

	for(let i=0; i< result.length; i++){
		for(let j=0; j<objectB.value.length; j++){
			if(result[i].key==objectB.value[j]){
				result[i].count=result[i].count-Math.floor(result[i].count/3);
			}
		}
	}
   return result;
}
