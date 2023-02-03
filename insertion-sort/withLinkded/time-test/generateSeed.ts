import fs from "fs";
console.log("Generating seed for algorithms...");

const array: number[] = [];
for (let i = 0; i < 100000; i++) {
    array.push(Math.floor(Math.random() * 300000));
}
array.sort().reverse();
fs.writeFileSync("./seed.json", JSON.stringify(array));
