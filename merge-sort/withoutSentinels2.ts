// E 2.3-2
function mergeSort(Array: number[], start: number, end: number) {
    if (start < end - 1) {
        const middle = Math.floor((start + end) / 2);
        mergeSort(Array, start, middle);
        mergeSort(Array, middle, end);
        merge(Array, start, middle, end);
    }
}

function merge(array: number[], start: number, middle: number, end: number) {
    const left = array.slice(start, middle);
    const right = array.slice(middle, end);
    for (let k = start; k < end; k++) {
        if (0 == left.length) {
            for (let i = 0; i < right.length; i++)
                array[k + i] = right[i];
            break;
        }
        if (0 == right.length) {
            for (let i = 0; i < left.length; i++)
                array[k + i] = left[i];
            break;
        }
        if (left[0] <= right[0]) {
            array[k] = left[0];
            left.shift();
        } else {
            array[k] = right[0];
            right.shift();
        }
    }
}

const array = [1, 4, 8, 1, 2, 4, 21, 33, 9, 92, 13, 45];
mergeSort(array, 0, array.length);
console.log(array);
