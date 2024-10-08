import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __oldFilePath = path.join(__dirname, "files", "wrongFilename.txt");
const __newFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  fs.access(__oldFilePath, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      fs.access(__newFilePath, (err) => {
        if (!err) {
          console.error("FS operation failed");
        } else {
          fs.rename(__oldFilePath, __newFilePath, (err) => {
            if (err) {
              console.error("FS operation failed");
            } else {
              console.log("Files renamed!");
            }
          });
        }
      });
    }
  });
};

await rename();
