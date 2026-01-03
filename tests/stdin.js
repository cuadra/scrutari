#!/usr/bin/env node

let output = "";
process.stdin.on("readable", () => {
  let chunk;
  while ((chunk = process.stdin.read()) !== null) {
    output += chunk;
  }
});

process.stdin.on("end", () => {
  //change it back into an array
  console.log(output.split(", "));
});
