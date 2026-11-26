import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line for "Make the Judge Laugh in One Line".
// Setup: asking AI to write wedding vows. Twist: the AI proposes to the
// laptop instead — the laugh lands on the last word, with no explanation.
// Revision: dropped the filler "and" for a semicolon, so the beat before
// the punchline costs zero words and the line reads tighter out loud.
const LINE =
  "I asked AI to write my wedding vows; it proposed to my laptop first.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
