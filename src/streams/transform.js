import { Transform } from "stream";

const transform = async () => {
  const reverseTextStream = new Transform({
    transform(chunk, enc, callback) {
      const stringChunk = chunk.toString().trim();
      const reversedChunk = stringChunk.split("").reverse().join("");
      this.push(reversedChunk + "\n");
      callback();
    },
  });
  process.stdin.pipe(reverseTextStream).pipe(process.stdout);
};

await transform();
