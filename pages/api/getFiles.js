import fs from "fs";
import path from "path";

export default function getFiles(req, res) {
  const dir = path.resolve("./public", "images");

  const filenames = fs.readdirSync(dir);
  const images = filenames.map((name) => path.join("/", "images", name));

  res.statusCode = 200;
  res.json(images);
}
