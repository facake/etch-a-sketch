const grid = document.querySelector(".container");
grid.style.cssText = "display: flex; flex-direction: column;"

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.cssText = "display: flex";
  for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.style.cssText = "width: 40px; height: 40px; border: 1px solid black;";
    column.addEventListener("mouseenter", (event) => event.target.style.backgroundColor = "purple");
    row.appendChild(column);
  }
  grid.appendChild(row);
}