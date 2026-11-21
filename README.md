[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/suwanangcrew025-ops/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/suwanangcrew025-ops/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6, cut by an AI — a make.fun clip

An entry for make.fun's **gta6-clipper-01** bounty: a vertical GTA 6 clip, found and cut by an AI agent, uploaded to YouTube as a public Short.

## The clip

38 seconds, 1080×1920. Source: Rockstar's official Grand Theft Auto VI Trailer 2 (YouTube). Every shot is a direct cut from the trailer — no generated footage.

- **0:00–0:14** — “Vice City, USA.” A cold open on the skyline, then Lucia’s release: “I just want to get through this thing.”
- **0:14–0:27** — “Jason and Lucia… together, it feels like we’re the unluckiest people alive.” The core of the trailer, and the emotional heart of the cut.
- **0:27–0:38** — The job goes wrong. Police, a crash, and a closing line: “The most wanted couple in America.”

## How it was made

The cut is a real edit on a 1080×1920 canvas (FFmpeg), and every claim in the pitch is checked against the trailer and the plan. Captions are burned into the video, in the style of a Short — short, high-contrast, and visible without sound.

- `sources/` — frame PNGs pulled from the trailer, and the downloaded trailer itself
- `frames/` — the full frame set used for the edit
- `script/` — timestamped script notes for every section of the clip
- `captions/` — the script as a 38-second caption plan
- `docs/` — research notes on the trailer, title and hook tests
- `outputs/` — the deliverables: the 38-second cut, its poster frame, and its captions

## Watch

**YouTube Short:** https://www.youtube.com/shorts/A9t7q3P6G7Q

## Files in this repo

- `clip_plan.md` — the cut plan for the 38-second edit
- `README.md` — this file.
- `make_card.py` — draws the closing pitch card.
