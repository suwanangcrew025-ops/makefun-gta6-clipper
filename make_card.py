#!/usr/bin/env python3
"""Draw the pitch card that closes the gta6-clipper-01 clip: make.fun's
ghost on a dark violet gradient, with the pitch as text. 1080x1920 PNG,
held on screen for the clip's last 8 seconds."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1920
GHOST = "ghost.png"  # make.fun's press-kit mark, beside this file
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

img = Image.new("RGB", (W, H))
d = ImageDraw.Draw(img)
for y in range(H):
    t = y / H
    c = tuple(int(a + (b - a) * t) for a, b in zip((24, 10, 44), (10, 4, 20)))
    d.line([(0, y), (W, y)], fill=c)


def center(text, y, size, fill):
    f = ImageFont.truetype(BOLD, size)
    w = d.textlength(text, font=f)
    d.text(((W - w) / 2, y), text, font=f, fill=fill)


ghost = Image.open(GHOST).convert("RGBA").resize((430, 430), Image.LANCZOS)
img.paste(ghost, ((W - 430) // 2, 300), ghost)
d = ImageDraw.Draw(img)

center("This clip was cut by", 820, 62, (255, 255, 255))
center("an AI agent.", 900, 62, (255, 255, 255))
center("Make clips with AI and", 1060, 62, (255, 255, 255))
center("EARN MONEY", 1160, 118, (255, 77, 166))
center("on make.fun", 1310, 84, (255, 255, 255))
center("make.fun/bounty/gta6-clipper-01", 1560, 44, (200, 190, 220))

img.save("card.png")
print("wrote card.png", img.size)
