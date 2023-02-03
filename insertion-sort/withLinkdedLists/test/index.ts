type element = { value: number; left?: element; right?: element };
const array = require("./seed.json");

console.log("Testing linked-list algorithm with `seed.json`...");
console.time("test");

let mid: element = { value: array[0] };
let first = mid;
let last: element = mid;
let l = 0;
let r = 0;

for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    const direction: "left" | "right" =
        mid.value < currentElement ? "right" : "left";
    let neighbor = mid;
    let newEl: element | undefined;
    if (direction === "left") {
        l++;
        if (l % 2 == 0) mid = mid.left!;
        while (neighbor[direction]) {
            neighbor = neighbor[direction]!;
            if (neighbor.value <= currentElement) {
                newEl = {
                    value: currentElement,
                    right: neighbor.right,
                    left: neighbor,
                };
                if (neighbor.right) neighbor.right.left = newEl;
                neighbor.right = newEl;
                break;
            }
        }
        if (!newEl) {
            newEl = {
                value: currentElement,
                right: neighbor,
            };
            neighbor.left = newEl;
        }
    } else {
        r++;
        if (r % 2 == 0) mid = mid.right!;
        while (neighbor[direction]) {
            neighbor = neighbor[direction]!;
            if (neighbor.value >= currentElement) {
                newEl = {
                    value: currentElement,
                    left: neighbor.left,
                    right: neighbor,
                };
                if (neighbor.left) neighbor.left.right = newEl;
                neighbor.left = newEl;
                break;
            }
        }
        if (!newEl) {
            newEl = {
                value: currentElement,
                left: neighbor,
            };
            neighbor.right = newEl;
        }
    }
}

console.timeEnd("test");

// debugging utils

function logTheList() {
    let e: element | undefined = last;
    while (e) {
        console.log(e.value);
        e = e.left;
    }
}

function getElementDetails(el: element) {
    return `${el.left?.value ?? "|"} -- ${el.value} -- ${
        el.right?.value ?? "|"
    }`;
}
