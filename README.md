# TypeChess

A Chrome extension for chess.com that lets you make moves by typing chess notation instead of clicking.

```
k  →  e2  →  e4
```

Press `k`, type the square your piece is on, type where it's going. That's it.

---

## Why

**Learning chess notation** — most beginners learn notation passively by reading game recaps. TypeChess forces you to actively recall it every move. After a few games you'll never need to look at the board coordinates again.

**Keyboard-only play** — no mouse required. If you spend your day on a keyboard and find switching to the mouse disruptive, this is for you.

---

## Install

1. Clone or download this repo
2. Go to `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the repo folder

---

## How to use

| Keys | What happens |
|------|-------------|
| `k` | Start a move |
| `e2` | Select the piece on e2 (chess.com highlights valid moves) |
| `e4` | Move it to e4 |
| `Backspace` | Delete last character |
| `Escape` | Cancel and reset |

The status bar at the bottom of the screen shows your input as you type:

```
move: e2  →  e_
```

---

## Not a vim plugin

TypeChess is keyboard-driven but has nothing to do with vim. The only thing it borrows is the idea that your hands shouldn't have to leave the keyboard.
