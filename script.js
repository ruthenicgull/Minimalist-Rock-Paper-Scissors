class RockPaperScissors{

    constructor(querySelectorString){
        this.root = document.querySelector(querySelectorString)
        this.root.querySelector("#game").innerHTML = RockPaperScissors.gameHtml()
        this.root.querySelector(".score-container").innerHTML = RockPaperScissors.scoreHtml()

        this.root.querySelector(".rock-button").addEventListener("click",() => {
            this.onRockBtnClick();
            this.gameState = this.game();
            this.updateScore(this.gameState)
        })
        this.root.querySelector(".paper-button").addEventListener("click",() => {
            this.onPaperBtnClick();
            this.gameState = this.game();
            this.updateScore(this.gameState)
        })
        this.root.querySelector(".scissors-button").addEventListener("click",() => {
            this.onScissorsBtnClick();
            this.gameState = this.game();
            this.updateScore(this.gameState)
        })

        this.initialGameState();
    }

    initialGameState(){
        this.gameState = -1
        this.human = -1
        this.computer = -1
        this.rps = ['✊','🖐️','✌️']
        this.humanScore = 0
        this.computerScore = 0
    }

    static gameHtml(){
        return `
            <p id="message">Click on a button to play</p>
        `
    }

    static scoreHtml(){
        return `
        <div class="score">
            <span id="score-human">0</span>
            <span id="score-hyphen">-</span>
            <span id="score-computer">0</span>
        </div>
        `
    }

    game(){
        this.computer = Math.floor(Math.random() * 3)

        const tieCondition = this.computer === this.human
        const winCondition = (this.human == this.computer + 1) || (this.human == this.computer - 2)

        this.gameMessage(tieCondition,winCondition)

        if (tieCondition) return -1
        else if (winCondition) return 1
        else return 0
    }

    gameMessage(tie,win){

        this.root.querySelector("#message").remove()
        if(tie){
            this.root.querySelector("#game").innerHTML = `<p id="message"> ${this.rps[this.human]} ties ${this.rps[this.computer]}`
        }
        else if(win){
            this.root.querySelector("#game").innerHTML = `<p id="message"> ${this.rps[this.human]} wins against ${this.rps[this.computer]}`
        }
        else{
            this.root.querySelector("#game").innerHTML = `<p id="message"> ${this.rps[this.human]} loses against ${this.rps[this.computer]}`
        }
    }

    updateScore(state){
        if(state == -1) return
        
        if(state == 1) this.humanScore += 1
        else if(state == 0) this.computerScore += 1

        this.root.querySelector("#score-human").innerText = this.humanScore
        this.root.querySelector("#score-computer").innerText = this.computerScore
    }

    onRockBtnClick(){
        this.human = 0;
        console.log(this.human);
        return this.human;
    }

    onPaperBtnClick(){
        this.human = 1;
        console.log(this.human);
        return this.human;
    }

    onScissorsBtnClick(){
        this.human = 2;
        console.log(this.human);
        return this.human;
    }
}

new RockPaperScissors("#app")