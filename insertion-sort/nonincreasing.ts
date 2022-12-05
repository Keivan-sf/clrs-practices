const elements = [1, 6, 8, 20, 23, 1, 7];

// loop-variant
let sortedList = [elements[elements.length - 1]];

for (let i = elements.length - 2; i >= 0; i--) {
    const currentElement = elements[i];
    sortedList.unshift(currentElement);
    let j = 1;
    while (currentElement > sortedList[j] && j < sortedList.length) {
        sortedList[j - 1] = sortedList[j];
        j++;
    }
    sortedList[j - 1] = currentElement;
}
console.log(sortedList);
