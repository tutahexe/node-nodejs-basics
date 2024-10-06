import path from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const input = createReadStream(__filePath);
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
