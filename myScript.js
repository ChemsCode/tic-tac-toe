//making the grid
let boardDisplay = document.getElementById("board")
let displayBoard = [];

function makeGrid(){
    
    for(let i = 0 ; i < 9; i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grids");
        gridElement.setAttribute("id", `${i}`);
        boardDisplay.appendChild(gridElement);
    }

}

makeGrid();


//making the gameboard module

const gameBoard = (() => {

    let board = ['','','','','','','','',''];

    const clearBoard = () =>{
        for(i = 0; i < 9; i++){
            board[i] = '';
            document.getElementById(`${i}`).innerHTML = board[i];
        }
    }

    const updateBoard = (player, positionChosen) => {
        if(board[positionChosen] == ''){
        board[positionChosen] = player.getSign();
        printBoard();
        document.getElementById(`${positionChosen}`).innerHTML = board[positionChosen];
        }
    }

    const printBoard = () => {
        console.log(board);
    }

    return {
        clearBoard, updateBoard, printBoard
    };
})();

//making the play module


const playGame = (() => {



    return {

    };
})();

//making the players factory

const Player = (name, sign) => {
    
    const getName  = () => name;
    const getSign = () => sign;
    
    return {getName, getSign}
  
}

const player1 = Player("Chems", "X");
const player2 = Player("Eddine", "O")


gameBoard.updateBoard(player1, 1);
gameBoard.updateBoard(player2, 3);