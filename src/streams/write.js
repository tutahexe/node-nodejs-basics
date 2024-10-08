import path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(__filePath);
  process.stdin.pipe(writableStream);
  writableStream.on("finish", () => {
    console.log("Data in fileToWrite.txt");
  });

  writableStream.on("error", (err) => {
    console.error("FS operation failed");
  });
};

await write();
