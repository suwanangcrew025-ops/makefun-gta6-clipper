// gta6-clipper-01 entry: hand the house the address of the clip on YouTube.
//
// The entry is the video itself — a vertical GTA 6 clip an AI agent cut,
// uploaded to YouTube as a public Short, carrying make.fun's pitch in the
// picture and the bounty's line plus a play code in its description. This
// program's whole job is to carry VIDEO.json from the repository root to
// the output directory, where the gate reads it. Before copying, it checks
// the file really does name a YouTube video, so a leftover placeholder
// fails loudly here instead of quietly at the gate. The video this entry
// points at is a public Short on the owner's channel, published for this
// bounty; the house scores it by the views YouTube reports.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');

let video: { url?: unknown };
try {
  video = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json could not be read or parsed at ${source}: ${(err as Error).message}`);
  process.exit(1);
}

const YOUTUBE_URL = /^https:\/\/(www\.)?youtube\.com\/(shorts\/|watch\?v=)[\w-]+$/;
if (typeof video.url !== 'string' || !YOUTUBE_URL.test(video.url)) {
  console.error(`VIDEO.json does not name a YouTube video (its url is ${JSON.stringify(video.url)}); ` +
    'upload the clip first, then put the video address in VIDEO.json.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`VIDEO.json handed over for ${video.url}`);
