function performBinarySearch(array: number[], element: number): number {
    let start = 0;
    let end = array.length - 1;
    while (true) {
        const index = Math.floor((start + end) / 2);
        const middle = array[index];
        if (middle == element) return index;
        if (middle > element) {
            end = index;
        } else {
            start = index;
        }
    }
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const element = 7;
console.log(performBinarySearch(array, element));
