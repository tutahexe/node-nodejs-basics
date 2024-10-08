import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const content = "I am fresh and young";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  fs.writeFile(__filePath, content, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      console.log("file created");
    }
  });
};

await create();
