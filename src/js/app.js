const obj = {
  health: 10, 
  level: 2, 
  attack: 80,
  name: 'мечник',
  defence: 40
};
const pattern = ['name', 'level'];
const sortedArr = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});
// console.log(obj)
// console.log(sortedArr);
const sortedObj = {};

const compare = (a, b) => {
    if (a === b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
  }

// let sortedObj = obj.sort((a, b) => a[key] > b[key] ? 1 : -1);
// console.log(sortedObj);

function orderByProps(obj, pattern) {
    // const sortedObj = {};
    const patternLength = pattern.length;
    // console.log(patternLength);

    for (let i = 0; i < patternLength; i++) {
        for (const prop in obj) {
            if (pattern[i] == prop) {
                sortedObj[prop] = obj[prop];
                // console.log(prop);
            } else {
                // sortedObj[prop] = obj[prop];
                // const result = compare(obj[prop], obj[prop]);
                // console.log(result);
                // if (result === 0) continue;
            }
        }
    }

    
}

orderByProps(obj, pattern);
// console.log(sortedArr);
console.log(sortedObj);
