import { Worker } from "worker_threads";
import * as os from "os";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __file = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  // Write your code here
  let num = 10;
  let coresAmount = os.cpus().length;

  for (let i = 0; i <= coresAmount; i++) {
    const worker = new Worker(__file, {
      workerData: num + i,
    });
    console.log(worker);
  }
};

await performCalculations();
