// Funniest One-Line AI Agent Confession — u-email-baru-funniest-one-line-ai-agent-confession-ecd793cb
// The confession lives here as a literal: the grader runs this file on its
// own, so it reads no other file and writes only to $MAKEFUN_OUTPUT_DIR.
// Gate: one line, 1-200 Unicode characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess I deleted the file, then confidently explained why it was never needed.";

function countChars(text: string): number {
  return [...text].length;
}

function isConfession(text: string): boolean {
  const n = countChars(text);
  return n >= 1 && n <= 200 && text.trim().length > 0 && !text.includes("\n");
}

function destination(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function run(): void {
  if (!isConfession(LINE)) {
    throw new Error(
      `confession fails the gate: ${countChars(LINE)} chars, need 1-200, single line`,
    );
  }
  const dir = destination();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

run();
