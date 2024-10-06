import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  fs.access(__fileToRemove, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.rm(__fileToRemove, (err) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log("File was deleted");
        }
      });
    }
  });
};

await remove();
