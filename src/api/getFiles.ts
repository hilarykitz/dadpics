import { readdirSync } from "fs";

export const getFiles = () => {
  const files = readdirSync("public");
  console.log(files, "get files");
  return files;
};
