import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, "../../Graphisme/Logo/CreaLeads_dark_square (1).jpg");
const pub = join(__dirname, "../public");

// 32x32 PNG
await sharp(src).resize(32, 32).png().toFile(join(pub, "favicon-32x32.png"));
console.log("✓ favicon-32x32.png");

// 180x180 Apple Touch Icon
await sharp(src).resize(180, 180).png().toFile(join(pub, "apple-touch-icon.png"));
console.log("✓ apple-touch-icon.png");

// 192x192 Android
await sharp(src).resize(192, 192).png().toFile(join(pub, "icon-192.png"));
console.log("✓ icon-192.png");

// favicon.ico = 32x32 raw ICO via raw buffer trick
// sharp ne supporte pas .ico natif — on génère un 32x32 PNG nommé favicon.ico
// Les navigateurs modernes acceptent un PNG en favicon.ico
const icoBuffer = await sharp(src).resize(32, 32).png().toBuffer();
writeFileSync(join(pub, "favicon.ico"), icoBuffer);
console.log("✓ favicon.ico (PNG 32x32)");

// og-image 1200x630
await sharp(src)
  .resize(1200, 630, { fit: "contain", background: { r: 11, g: 30, b: 61 } })
  .jpeg({ quality: 90 })
  .toFile(join(pub, "og-image.jpg"));
console.log("✓ og-image.jpg");

console.log("\nFavicons générés dans public/");
