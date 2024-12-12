const container = document.querySelector(".container");
const resizeButton = document.querySelector("#resize-button");

initializeGrid(16);

resizeButton.addEventListener("click", handleResize);

function initializeGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        const squareSize = 100 / size; 
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = getRandomRGBColor();
            square.style.opacity = Math.max(square.style.opacity ? square.style.opacity - 0.1 : 0.9, 0); });

        container.appendChild(square);
    }
}


function handleResize() {
    let size = prompt("How many squares per side do you want?");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    initializeGrid(size);
}

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}