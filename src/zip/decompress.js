import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = path.join(__dirname, "files", "fileToCompress.txt");
const __archive = path.join(__dirname, "files", "archive.gz");

const unzip = createGunzip();
const source = createReadStream(__archive);
const destination = createWriteStream(__filePath);

const compress = async () => {
  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    } else {
      console.log(`File successfully decompressed. Can be found ${__filePath}`);
    }
  });
};

await compress();
