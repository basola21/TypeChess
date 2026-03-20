function getBoard() {
  return document.querySelector("#board-layout-chessboard")
}

function squareToCoords(square) {
  const board = getBoard()
  const rect = board.getBoundingClientRect()
  const size = rect.width / 8

  const file = square.charCodeAt(0) - 97
  const rank = parseInt(square[1]) - 1

  return {
    x: rect.left + (file + 0.5) * size,
    y: rect.top + (7 - rank + 0.5) * size,
  }
}

function clickSquare(square) {
  if (!getBoard()) return console.log("no board")

  const { x, y } = squareToCoords(square)
  const target = document.elementFromPoint(x, y)
  if (!target) return console.log("no target at", square)

  const props = { bubbles: true, clientX: x, clientY: y, pointerId: 1, pointerType: "mouse", isPrimary: true }
  target.dispatchEvent(new PointerEvent("pointermove", props))
  target.dispatchEvent(new PointerEvent("pointerdown", props))
  target.dispatchEvent(new PointerEvent("pointerup", props))
  target.dispatchEvent(new MouseEvent("click", props))
}
