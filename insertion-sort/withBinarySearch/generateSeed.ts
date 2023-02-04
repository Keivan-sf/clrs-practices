import fs from "fs";
console.log("Generating seed for algorithms...");

const array: number[] = [];
for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
}
fs.writeFileSync("./seed.json", JSON.stringify(array));
