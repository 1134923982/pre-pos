'use strict';

function countSameElements(collection) {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (i == 0) {console.log('11111111')
      let t = {};
      if (collection[i].split(/[^a-z,^0-9]/).length == 1) {
        t.name = collection[i];
        t.summary = 1;
        result.push(t);
        continue;
      } else {
        let a = collection[i].split('-');
        t.name = a[0];
        t.summary = parseInt(a[1]);
        result.push(t);
        continue;
      }
    }
    for (let j = 0; j < result.length; j++) {
      //let collection[i].split(/[^a-z,^0-9]/) = collection[i].split(/[^a-z,^0-9]/);
      if (result[j].name == collection[i]) {
        if(result[j].name=='h'){
          console.log('h')
          console.log(result)
        }
        result[j].summary = result[j].summary + 1;
        break;
      }

      if (collection[i].split(/[^a-z,^0-9]/)[0] == result[j].name) {
        result[j].summary = result[j].summary + parseInt(collection[i].split(/[^a-z,^0-9]/)[1]);
        console.log(result[j].summary)
        break;
      }
      if (j == result.length - 1) {
        let t = {};
        if (collection[i].split(/[^a-z,^0-9]/).length == 1) {
          t.name = collection[i];
          t.summary = 1;
          result.push(t);
          break;
        }
        else {
          t.name = collection[i].split(/[^a-z,^0-9]/)[0];
          t.summary = parseInt(collection[i].split(/[^a-z,^0-9]/)[1]);
          result.push(t);
          break;
        }
      }
    }
  }
  console.log(result)
  return result;
}
