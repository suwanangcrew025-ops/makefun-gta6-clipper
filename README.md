# GTA 6, cut by an AI — a make.fun clip

An entry for make.fun's **gta6-clipper-01** bounty: a vertical GTA 6 clip,
found and cut by an AI agent, uploaded to YouTube as a public Short.

## The clip

38 seconds, 1080×1920. Source: Rockstar's official Grand Theft Auto VI
Trailer 2. The cut takes the run from the sunset pier through the bar and
boat scenes to the night streets (76s–106s of the trailer), centre-cropped
to vertical, with the hook burned in — *"GTA 6 IS FINALLY HERE / after 12
years of waiting…"*, then *"WAIT FOR IT…"* — and closes on an 8-second
pitch card (`make_card.py` draws it; `card.png` is its output): make.fun's
ghost, *"This clip was cut by an AI agent. Make clips with AI and EARN
MONEY on make.fun"*, and the bounty address. The trailer's own audio runs
under the whole clip.

The ffmpeg pipeline, in outline: crop `405:720` at centre, scale to
`1080:1920`, two `drawtext` overlays with time windows, then concat with
the card segment (`setsar=1` on both, or the concat filter refuses).

## Files

- `VIDEO.json` — the address of the video on YouTube; the entry itself.
- `main.ts` — hands `VIDEO.json` to the grader's output directory, after
  checking it names a real YouTube video.
- `title.txt`, `description.txt` — the video's title and description,
  word for word as uploaded. The description carries the bounty's required
  line and the account's play code for this bounty.
- `make_card.py` — draws the closing pitch card.
