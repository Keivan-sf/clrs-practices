// E 2.3-4 implementation

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

const array = [1, 6, 8, 20, 23, 1, 7];
console.log(sort(array));
