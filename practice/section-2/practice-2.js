'use strict';

function countSameElements(collection) {
    let result=[];
	for(let i=0;i<collection.length;i++){
		if(i==0){
			let t={};
			if(collection[i].split('-').length==1){
        t.key=collection[i];
        t.count=1;
        result.push(t);
        continue;
      }else{
        let a = collection[i].split('-');
        t.key=a[0];
        t.count=parseInt(a[1]);
        result.push(t);
        continue;
      }
		}
		for(let j=0;j<result.length;j++){
			if(result[j].key==collection[i]){
				result[j].count++;
				break;
			}
			if(j===result.length-1){
				let t={};
        if(collection[i].split('-').length==1){
          t.key=collection[i];
          t.count=1;
          result.push(t);
          break;
        }else{
          let a = collection[i].split('-');
          t.key=a[0];
          t.count=parseInt(a[1]);
          result.push(t);
          break;
        }
			}
		}
	}
	console.log(result);
	 return result;
}
