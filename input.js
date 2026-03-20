// Flow: k → source square (e.g. e2) → dest square (e.g. e4)
// Escape resets at any point, Backspace deletes last char

const FILES = new Set("abcdefgh".split(""))
const RANKS = new Set("12345678".split(""))

let mode = "idle"
let buffer = ""
let srcSquare = ""

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mode = "idle"
    buffer = ""
    srcSquare = ""
    setStatus("")
    return
  }

  if (mode === "idle") {
    if (e.key === "k") {
      mode = "src"
      buffer = ""
      setStatus("move: _")
      e.stopPropagation()
    }
    return
  }

  e.stopPropagation()

  if (e.key === "Backspace") {
    if (buffer.length === 1) {
      buffer = ""
      setStatus(mode === "src" ? "move: _" : `move: ${srcSquare}  →  _`)
    } else if (mode === "dst") {
      mode = "src"
      buffer = ""
      srcSquare = ""
      setStatus("move: _")
    } else {
      mode = "idle"
      buffer = ""
      setStatus("")
    }
    return
  }

  if (mode === "src") {
    if (buffer === "" && FILES.has(e.key)) {
      buffer = e.key
      setStatus(`move: ${buffer}_  →  ?`)
    } else if (buffer.length === 1 && RANKS.has(e.key)) {
      srcSquare = buffer + e.key
      buffer = ""
      clickSquare(srcSquare)
      mode = "dst"
      setStatus(`move: ${srcSquare}  →  _`)
    }
    return
  }

  if (mode === "dst") {
    if (buffer === "" && FILES.has(e.key)) {
      buffer = e.key
      setStatus(`move: ${srcSquare}  →  ${buffer}_`)
    } else if (buffer.length === 1 && RANKS.has(e.key)) {
      const dst = buffer + e.key
      clickSquare(dst)
      mode = "idle"
      buffer = ""
      srcSquare = ""
      setStatus("")
    }
  }
}, true)
