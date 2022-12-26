function createGameSquares(size) {
    const gridContainer = document.querySelector(".grid-container")
    const containerStyle = getComputedStyle(gridContainer);
    for (i=0; i<size * size; i++) {
        let gameSquare = document.createElement("div");
        gameSquare.classList.add("grid-square");
        gameSquare.addEventListener("mouseover", () => gameSquare.classList.add("hovered-square"));
        //calculate the height and width of the container, making sure each square in the grid fits inside
        gameSquare.style.height = ((parseInt(containerStyle.height) / size)-2).toString() + "px";
        gameSquare.style.width = ((parseInt(containerStyle.width) / size)-2).toString() + "px";
        gridContainer.appendChild(gameSquare);
    }

}

const editButton = document.querySelector(".edit-button")

editButton.addEventListener("click", () => {
    let userChoice = prompt("Choose a grid size between 1-32");
    validateInput(userChoice);
})

function tearDownGame(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function validateInput(number) {
    let gameContainer = document.querySelector(".grid-container");
    if (number < 1 || number > 64) {
        alert("number must be between 1 and 64")
    } else if (typeof parseInt(number) != "number") {
        alert("must enter a number!")
    } else {
        tearDownGame(gameContainer)
        createGameSquares(parseInt(number));
    }
}


createGameSquares(12);