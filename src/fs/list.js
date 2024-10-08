import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __sourceDir = path.join(__dirname, "files");

const list = async () => {
  fs.access(__sourceDir, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.readdir(__sourceDir, (err, files) => {
        if (err) {
          console.error("FS operation failed");
        } else {
          console.log(files);
        }
      });
    }
  });
};

await list();
