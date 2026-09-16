import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Page not found | Skagway Shore Excursions";
const path = join(process.cwd(), "out", "404.html");
let html = readFileSync(path, "utf8");
html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/g, `<title>${TITLE}</title>`);
writeFileSync(path, html);
console.log(`Patched ${path} -> ${TITLE}`);
