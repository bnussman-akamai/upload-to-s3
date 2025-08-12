import { Glob, s3 } from "bun";

const glob = new Glob("*.tar.gz");

for (const file of glob.scanSync(".")) {
    await s3.write(file, Bun.file(file))
    console.log("Uploaded", file, "to S3 bucket.")
}
