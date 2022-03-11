//making the grid
let boardDisplay = document.getElementById("board")
let displayBoard = [];
let playCounter = 0;

function makeGrid(){
    
    for(let i = 0 ; i < 9; i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grids");
        gridElement.setAttribute("id", `${i}`);
        boardDisplay.appendChild(gridElement);
    }

}

makeGrid();

// function assignEventListener(sign, boardArray){
//     for(let i = 0 ; i < 9; i++){
//         document.getElementById(`${i}`).addEventListener("click", () => {
//             document.getElementById(`${i}`).innerHTML = sign; 
//             boardArray[i] = sign;
//             console.log(boardArray);
//         });
//     }
// }

function playeGameTurn(){
    for(let i = 0 ; i < 9; i++){
        document.getElementById(`${i}`).addEventListener("click", () => {
            playGame.playTurn(player1, player2, (document.getElementById(`${i}`).getAttribute('id')));
            console.log("The documnet ID value returned by playedGameTurn is " + (document.getElementById(`${i}`).getAttribute('id')));
        });
    }
}

//making the gameboard module

const gameBoard = (() => {

    let board = ['','','','','','','','',''];

    const clearBoard = () =>{
        for(i = 0; i < 9; i++){
            board[i] = '';
            document.getElementById(`${i}`).innerHTML = board[i];
        }
    }

    const updateBoard = (sign, positionChosen) => {
        
        if(board[positionChosen] == ''){
            console.log("The positionChosen's value is: " + board[positionChosen] + " and the index of that poisition is " + positionChosen)
            document.getElementById(`${positionChosen}`).innerHTML = sign; 
            board[positionChosen] = sign;
        }
        // else{
        //     playeGameTurn();
        // }

        //board[positionChosen] = sign
        // assignEventListener(sign, board);
        
    }

    const printBoard = () => {
        console.log(board);
    }

    const getBoardElement = (index) => board[index];

    return {
        clearBoard, updateBoard, printBoard, getBoardElement, board
    };
})();

//making the play module


const playGame = (() => {

    const playTurn = (player1, player2, boardPosition) =>{
        let sign = checkTurn(player1, player2);
        console.log("This is the sign after the checkTurn method: " + sign);
        gameBoard.updateBoard(sign, boardPosition);
        // assignEventListener(sign, gameBoard.board);
        // playeGameTurn();

    }

    const checkTurn = (player1, player2) =>{

        let p1_counter = 0;
        let p2_counter = 0;    

        for(let i = 0; i < 9; i++){
            if(gameBoard.board[i] == player1.getSign())
            p1_counter++;
            else if(gameBoard.board[i] == player2.getSign())
            p2_counter++;
        }

        console.log("This is the count of X's: " + p1_counter);
        console.log("This is the count of O's: " + p2_counter);

        if((p1_counter == p2_counter))
        return player1.getSign()
        else
        return player2.getSign()
    }

    return{ playTurn};
})();

//making the players factory

const Player = (name, sign) => {
    
    const getName  = () => name;
    const getSign = () => sign;
    
    return {getName, getSign}
  
}

const player1 = Player("Chems", "X");
const player2 = Player("Eddine", "O")


// gameBoard.updateBoard(player1, 1);
// gameBoard.updateBoard(player2, 3);
// gameBoard.updateBoard(player1, 5);
// gameBoard.updateBoard(player2, 0);

// playGame.checkTurn(player1, player2);



// assignEventListener('X', gameBoard.board);

playeGameTurn();

