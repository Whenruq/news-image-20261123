// Entry for make.fun's news-image-20261123 bounty. Node 22, standard library only.
// The image beside this file, entry.png, is a 1024x1024 front page summing up the
// world news of Monday 23 November 2026: tankers burning in the Strait of Hormuz
// after hitting naval mines, Nvidia reinstating Jensen Huang as chief executive,
// the Dymer death toll reaching 11, Kyiv claiming a Russian warship sunk in Libya,
// the COP31 talks collapsing, and the search resuming at the Cikande factory.
// This program copies that image to /output/entry.png. The gate accepts a whole
// PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees exactly
// the bytes copied, so the run is deterministic: the same committed bytes are
// written on every run.
//
// To try it outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
