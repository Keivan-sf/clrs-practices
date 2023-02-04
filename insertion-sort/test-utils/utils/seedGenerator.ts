import fs from "fs";
console.log("Generating seed for algorithms...");

const array: number[] = [];
for (let i = 0; i < 100000; i++) {
    array.push(Math.floor(Math.random() * 300000));
}

fs.writeFileSync("./seed.json", JSON.stringify(array));

console.log("Seed has been generated and saved to `seed.json`");
