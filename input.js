// Flow: k → source square (e.g. e2) → dest square (e.g. e4)
// Escape resets at any point

const FILES = new Set("abcdefgh".split(""))
const RANKS = new Set("12345678".split(""))

let mode = "idle"
let buffer = ""

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mode = "idle"
    buffer = ""
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

  if (mode === "src") {
    if (buffer === "" && FILES.has(e.key)) {
      buffer = e.key
      setStatus(`move: ${buffer}_  →  ?`)
    } else if (buffer.length === 1 && RANKS.has(e.key)) {
      const src = buffer + e.key
      buffer = ""
      clickSquare(src)
      mode = "dst"
      setStatus(`move: ${src}  →  _`)
    }
    return
  }

  if (mode === "dst") {
    if (buffer === "" && FILES.has(e.key)) {
      buffer = e.key
      setStatus(`move: ... →  ${buffer}_`)
    } else if (buffer.length === 1 && RANKS.has(e.key)) {
      const dst = buffer + e.key
      clickSquare(dst)
      mode = "idle"
      buffer = ""
      setStatus("")
    }
  }
}, true)
