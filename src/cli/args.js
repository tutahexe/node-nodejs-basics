import { argv } from "node:process";

const parseArgs = () => {
  let output = "";
  for (let i = 0; i < argv.length; i += 2) {
    if (argv[i].startsWith("--")) {
      output += `${argv[i]} is ${argv[i + 1]}, `;
    }
  }
  console.log(output);
};

parseArgs();
