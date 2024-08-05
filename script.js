const grid = document.querySelector(".container");
grid.style.cssText = "display: flex; flex-direction: column;"

// Add "Shake" button to refresh grid
const btn = document.querySelector("button");
btn.addEventListener("click", () => makeGrid(getSize()))

makeGrid(16);

function makeGrid(size) {
  // Remove existing grid
  grid.innerHTML = "";

  // Create new grid
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex";
    for (let i = 0; i < size; i++) {
      const column = document.createElement("div");
      edgeLength = 960 / size + "px";
      column.style.cssText = `width: ${edgeLength}; height: ${edgeLength}; border: 1px solid black; background-color: transparent`;
      // Set up hover effect
      column.addEventListener("mouseenter", (event) => {
        if (event.target.style.backgroundColor == "transparent") {
          event.target.style.backgroundColor = getRandomColor();
        }
      });
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
}

function getSize() {
  let size;
  while (true) {
    size = +prompt("What's the number of squares per side for the new grid?", "Please enter positive integer that doesn't exceed 100");
    if (Number.isInteger(size) && size <= 100 && size > 0) {
      return size;
    }
  }
}

function getRandomColor() {
  const digit = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += digit[Math.floor(Math.random() * 16)];
  }
  return color;
}