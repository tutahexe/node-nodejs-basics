import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __file = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const sp = spawn("node", [__file, ...args]);
  process.stdin.pipe(sp.stdin);
  sp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
