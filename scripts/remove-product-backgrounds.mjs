import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const productFolders = [
  "public/images/poultry-game-birds",
  "public/images/pet-birds",
];

// Treat only neutral, near-white pixels that connect to an outer edge as backdrop.
// This preserves white labels and light-colored feed inside a product package.
const isBackdrop = (r, g, b) =>
  Math.min(r, g, b) >= 232 && Math.max(r, g, b) - Math.min(r, g, b) <= 18;

async function removeBackground(file) {
  const image = sharp(file).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];
  let head = 0;

  const add = (x, y) => {
    const index = y * width + x;
    if (visited[index]) return;
    const offset = index * channels;
    if (!isBackdrop(data[offset], data[offset + 1], data[offset + 2])) return;
    visited[index] = 1;
    queue.push(index);
  };

  for (let x = 0; x < width; x += 1) {
    add(x, 0);
    add(x, height - 1);
  }
  for (let y = 1; y < height - 1; y += 1) {
    add(0, y);
    add(width - 1, y);
  }

  while (head < queue.length) {
    const index = queue[head++];
    const x = index % width;
    const y = Math.floor(index / width);
    if (x > 0) add(x - 1, y);
    if (x + 1 < width) add(x + 1, y);
    if (y > 0) add(x, y - 1);
    if (y + 1 < height) add(x, y + 1);
  }

  for (const index of queue) data[index * channels + 3] = 0;
  await sharp(data, { raw: { width, height, channels } }).png().toFile(file);
  return queue.length;
}

for (const folder of productFolders) {
  const files = (await fs.readdir(folder)).filter((file) => file.endsWith(".png"));
  for (const name of files) {
    const file = path.join(folder, name);
    const removed = await removeBackground(file);
    console.log(`${file}: removed ${removed.toLocaleString()} backdrop pixels`);
  }
}
