import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "My coding agent outwrites my reviews. I'm the loading spinner.";
const length = [...TEXT].length;
if (length < 1 || length > 280) throw new Error('Joke must contain 1–280 Unicode characters.');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
