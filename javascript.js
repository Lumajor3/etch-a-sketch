function createGameSquares(size) {
    const gridContainer = document.querySelector(".grid-container")
    const containerStyle = getComputedStyle(gridContainer);
    for (i=0; i<size * size; i++) {
        let gameSquare = document.createElement("div");
        gameSquare.classList.add("grid-square");
        //calculate the height and width of the container, making sure each square in the grid fits inside
        gameSquare.style.height = ((parseInt(containerStyle.height) / size)-2).toString() + "px";
        gameSquare.style.width = ((parseInt(containerStyle.width) / size)-2).toString() + "px";
        gridContainer.appendChild(gameSquare);
    }

}

createGameSquares(12);