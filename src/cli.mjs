import run from "./scrutari.mjs";

const origin = process.env.URL;
const verbose =
  process.argv.includes("--verbose") || process.argv.includes("-v");
const output = process.argv.includes("--output") || process.argv.includes("-o");

(async () => {
  if (!origin) {
    console.error("Error: URL is not set.");
    process.exit(1);
  }

  const urls = await run({ origin: origin, verbose: verbose });

  if (output) {
    const fs = require("fs");
    fs.writeFileSync("output.txt", urls, (err) => {
      console.error("Error writing to output.txt:", err);
      process.exit(1);
    });
  } else {
    process.stdout.write(urls);
  }

  process.exit(0);
})().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
