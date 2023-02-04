const array = require("../seed.json");
console.log("Testing with recursive insertion-sort with `seed.json` ...");
console.time("TEST-TIME");

function sort(array: number[]): number[] {
    if (array.length < 2) return array;
    const element = array.pop()!;
    return performInsertionSort(sort(array), element);
}

function performInsertionSort(array: number[], element: number): number[] {
    array.push(element);
    let i = array.length - 2;
    while (i >= 0 && array[i] >= element) {
        array[i + 1] = array[i];
        i--;
    }
    array[i + 1] = element;
    return array;
}
sort(array);

console.timeEnd("TEST-TIME");
