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
    left.push(10000);
    right.push(10000);
    let l = 0;
    let r = 0;
    let k = 0;
    while (k < end - start) {
        console.log(`comparing ${left[l]} <= ${right[r]}`);
        if (left[l] <= right[r]) {
            array[k + start] = left[l];
            l++;
        } else {
            array[k + start] = right[r];
            r++;
        }
        k++;
    }
    console.log(` >>left: ${left} || right: ${right}`);
}

const array = [1, 4, 8, 1, 2, 4, 21, 33, 9, 92, 13, 45];
mergeSort(array, 0, array.length);
console.log(array);
