var player = 1;
var counter = 0;
var gameBox = $("td");
var reset = $("input")

gameBox.on("click",marker)
reset.on("click",resetBord)

function marker() {
        if(player === 1){
            console.log("player1")
            playerChar = "X"
            if(this.textContent === "") {
                this.textContent = playerChar;
                makePlayer();
                checkWin();
                counter +=1;
            }
        }else if(player === 2 ){
            console.log("player  2")
            playerChar = "O"
            if(this.textContent === "") {
                this.textContent = playerChar;
                makePlayer();
                checkWin();
                counter +=1;

            }
        }
    }

function makePlayer() {
   player =  player  % 2+1
}

function resetBord() {
   counter = 0;
    for (const char of gameBox) {
        char.textContent = ""
    }
    $("p").eq(-1).text("who win the game ?");

}

// need to fix !
function win() {

    var bordSlot = [gameBox[0].textContent,
        gameBox[1].textContent,
        gameBox[2].textContent,
        gameBox[3].textContent,
        gameBox[4].textContent,
        gameBox[5].textContent,
        gameBox[6].textContent,
        gameBox[7].textContent,
        gameBox[8].textContent,
    ]
    if (bordSlot[0] === "X" && bordSlot[1] === "X" && bordSlot[2] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    } else if (bordSlot[3] === "X" && bordSlot[5] === "X" && bordSlot[6] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    } else if (bordSlot[7] === "X" && bordSlot[8] === "X" && bordSlot[9] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    } else if (bordSlot[0] === "O" && bordSlot[1] === "O" && bordSlot[2] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    } else if (bordSlot[3] === "O" && bordSlot[4] === "O" && bordSlot[5] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    } else if (bordSlot[6] === "O" && bordSlot[7] === "O" && bordSlot[8] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }else if (bordSlot[2] === "O" && bordSlot[5] === "O" && bordSlot[8] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }else if (bordSlot[1] === "O" && bordSlot[4] === "O" && bordSlot[7] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }else if (bordSlot[0] === "O" && bordSlot[3] === "O" && bordSlot[6] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }else if (bordSlot[2] === "X" && bordSlot[5] === "X" && bordSlot[8] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    }else if (bordSlot[1] === "X" && bordSlot[4] ==="X" && bordSlot[7] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    }else if (bordSlot[0] === "X" && bordSlot[3] === "X" && bordSlot[6] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    }else if (bordSlot[6] === "X" && bordSlot[4] === "X" && bordSlot[2] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    }else if (bordSlot[0] === "X" && bordSlot[4] === "X" && bordSlot[8] === "X") {
        $("p").eq(-1).text("X win ! \n if want try more rest!")
        return true
    }else if (bordSlot[6] === "O" && bordSlot[4] === "O" && bordSlot[2] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }else if (bordSlot[0] === "O" && bordSlot[4] === "O" && bordSlot[8] === "O") {
        $("p").eq(-1).text("O win ! \n if want try more rest!")
        return true
    }

}

function bordFull() {
    if(counter <9){
        return false
    }else if (counter === 9){
        $("p").eq(-1).text("bord is full! \n if want try more rest!");
        return true
    }
}
function checkWin() {
    winCeckWin = win()
    borderCheck = bordFull()
    if (winCeckWin === true){
        alert("happy win :) \n resat the game! " )
    }else if(borderCheck === true){
        alert("bord is full \n resat the game! " )

    }
}
