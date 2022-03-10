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

    const getBoardElement = (index) => board[index];

    return {
        clearBoard, updateBoard, printBoard, getBoardElement
    };
})();

//making the play module


const playGame = (() => {

    const playTurn = (player1, player2) =>{

    }

    const checkTurn = (player1, player2) =>{
        let p1_counter = 0;
        let p2_counter = 0;

        for(i = 0; i < 9; i++){
            if(gameBoard.getBoardElement(i) == player1.getSign())
            p1_counter++;
            else if(gameBoard.getBoardElement(i) == player2.getSign())
            p2_counter++;
        }

        if((p1_counter == p2_counter))
        console.log("p1 turn")
        else
        console.log("p2 turn")  
    }

    return{checkTurn};
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
gameBoard.updateBoard(player1, 5);
gameBoard.updateBoard(player2, 0);

playGame.checkTurn(player1, player2);