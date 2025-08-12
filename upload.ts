import { Glob, s3 } from "bun";

const glob = new Glob("*.tar.gz");

const file = Array.from(glob.scanSync(".")).toSorted().at(-1);

if (!file) {
  throw new Error("No build found to upload to S3 buckte");
}

await s3.write(file, Bun.file(file))

console.log("Uploaded", file, "to S3 bucket.")

