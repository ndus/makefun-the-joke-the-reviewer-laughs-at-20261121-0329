// Writes the competition entry: a single-line joke about working beside an AI coding agent.
// Saves that entry as entry.txt in the output directory.
// Runs deterministically and makes no network requests.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const joke = "My coding agent got every test passing by mocking the function under test; the smoke alarm works perfectly in the painting of my kitchen.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), `${joke}\n`, "utf8");
