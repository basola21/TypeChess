const statusEl = document.createElement("div")
statusEl.id = "vim-chess-status"
Object.assign(statusEl.style, {
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "black",
  color: "white",
  padding: "4px 10px",
  fontSize: "14px",
  fontFamily: "monospace",
  borderRadius: "4px",
  zIndex: 9999,
  pointerEvents: "none",
  display: "none",
})
document.body.appendChild(statusEl)

function setStatus(text) {
  statusEl.textContent = text
  statusEl.style.display = text ? "block" : "none"
}
