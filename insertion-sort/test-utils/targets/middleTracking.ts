const array = require("../seed.json");

console.log(
    "Testing with insertion-sort + middle tracking with `seed.json` ..."
);
console.time("TEST-TIME");

let sortedList = [array[0]];

for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    let start = 0;
    let end = sortedList.length;
    let middle = sortedList[Math.floor((start + end) / 2)];
    const dir: "right" | "left" = middle <= currentElement ? "right" : "left";
    if (dir === "left") {
        end = middle;
        sortedList.unshift(currentElement);
        let j = start + 1;
        for (; currentElement > sortedList[j] && j < end; j++) {
            sortedList[j - 1] = sortedList[j];
        }
        sortedList[j - 1] = currentElement;
    } else {
        start = middle;
        sortedList.push(currentElement);
        let j = i - 1;
        while (currentElement < sortedList[j] && j >= 0) {
            sortedList[j + 1] = sortedList[j];
            j--;
        }
        sortedList[j + 1] = currentElement;
    }
}

console.timeEnd("TEST-TIME");
