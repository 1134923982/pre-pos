'use strict';

function countSameElements(collection) {
	let result=[];
	for(let i=0;i<collection.length;i++){
		if(i==0){
			let t={};
			t.key=collection[i];
			t.count=1;
			result.push(t);
			continue;
		}
		for(let j=0;j<result.length;j++){
			if(result[j].key==collection[i]){
				result[j].count++;
				break;
			}
			if(j===result.length-1){
				let t={};
				t.key=collection[i];
				t.count=1;
				result.push(t);
				break;
			}
		}
	}
	 return result;
}
