import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __file = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  fs.access(__file, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readFile(__file, "utf8", (err, data) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log(data);
        }
      });
    }
  });
};

await read();
