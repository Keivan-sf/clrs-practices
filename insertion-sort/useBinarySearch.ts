/**
 * E 2.3-6
 *
 * Note: Insertion sort worst-case running time will not
 * improve with binary search since it has to change the
 * indices of each element no matter how soon it finds
 * the right place for the new element.
 */

const elements = [
    1, 6, 8, 20, 23, 1, 7, 71, 12, 129, 9, 233, 12, 122, 12, 3, 5, 6,
];

let sortedList = [elements[0]];
for (let i = 1; i < elements.length; i++) {
    const currentElement = elements[i];
    pushElementIntoSortedArray(sortedList, currentElement);
}
function pushElementIntoSortedArray(array: number[], element: number) {
    let start = 0;
    let end = array.length - 1;
    while (true) {
        const index = Math.floor((start + end) / 2);
        if (end - start < 2) {
            if (element >= array[end]) {
                array.splice(end + 1, 0, element);
            } else if (element >= array[start]) {
                array.splice(start + 1, 0, element);
            }
            return;
        }
        const middle = array[index];
        if (middle >= element) {
            end = index;
        } else {
            start = index;
        }
    }
}

console.log(sortedList);
