import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const content = "I am fresh and young";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __sourceDir = path.join(__dirname, "files");
const __copyDir = path.join(__dirname, "files_copy");

const copy = async () => {
  fs.access(__copyDir, (err) => {
    if (!err) {
      console.error("FS operation failed");
    } else {
      fs.cp(__sourceDir, __copyDir, { recursive: true }, (err) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log("Directory and files copied");
        }
      });
    }
  });
};

await copy();
