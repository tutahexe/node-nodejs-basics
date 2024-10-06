import { argv } from "node:process";

const parseEnv = () => {
  let output = "";
  argv.forEach((val) => {
    if (val.startsWith("RSS_")) {
      output += val + "; ";
    }
  });
  console.log(output);
};

parseEnv();
