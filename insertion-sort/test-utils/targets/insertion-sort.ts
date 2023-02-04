const elements = require("../seed.json")
console.log("Testing with normal insertion-sort with `seed.json` ...")
console.time("TEST-TIME")
// loop-invariant
let sortedList = [elements[0]];

for (let i = 1; i < elements.length; i++) {
    const currentElement = elements[i];
    sortedList.push(currentElement);
    let j = i - 1;
    while (currentElement < sortedList[j] && j >= 0) {
        sortedList[j + 1] = sortedList[j];
        j--;
    }
    sortedList[j + 1] = currentElement;
}
console.timeEnd("TEST-TIME")
