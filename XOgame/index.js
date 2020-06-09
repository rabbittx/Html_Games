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
                this.textContent = playerChar
                counter +=1
                checkWin()
                makePlayer()
            }
        }else if(player === 2 ){
            console.log("player  2")
            playerChar = "O"
            if(this.textContent === "") {
                this.textContent = playerChar
                counter +=1
                checkWin()
                makePlayer()
            }
        }
    }

function makePlayer() {
   player =  player  % 2+1
}

function resetBord() {
    for (const char of gameBox) {
        char.textContent = ""
    }
}

// need to fix !
function checkWin() {
    var zero  = gameBox.eq(0)
    var one   = $("td:eq(1)")
    var two   = $("td:eq(2)")
    var three = $("td:eq(3)")
    var four  = $("td:eq(4)")
    var five  = $("td:eq(5)")
    var six   = $("td:eq(6)")
    var seven = $("td:eq(7)")
    var eight = $("td:eq(8)")
    if (zero === one){
        console.log("win")
    }


}

function bordFull() {
    if(counter <9){
        return false
    }else if (counter === 9){
        return true
    }
}