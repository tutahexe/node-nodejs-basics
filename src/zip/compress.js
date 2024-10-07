import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = path.join(__dirname, "files", "fileToCompress.txt");
const __destinationPath = path.join(__dirname, "files", "archive.gz");

const gzip = createGzip();
const source = createReadStream(__filePath);
const destination = createWriteStream(__destinationPath);

const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("Operation failed:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
