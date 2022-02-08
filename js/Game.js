/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        //Phrases for the Game
        this.phrases = phrase.phrases
        this.activePhrase = null;

    }


    //gets the quote and logs it out
    loadQuote() {
        this.phrases.forEach((item, index) => {
            console.log(`Phrase ${index + 1} - phrase: ${item}`);
        });
    }



    //returns the random phrase
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        const newPhrase = this.phrases[randomNumber];
        console.log(`Random Phrase ${randomNumber + 1} - phrase: ${this.phrases[randomNumber]}`);
        // this.phrases.splice(randomNumber,1)
        console.log(this.phrases)
        return newPhrase;
    }

    //starts the game up and sets the overlay display to none
    startGame(active) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = active.toLowerCase();
        phrase.addPhraseToDisplay(active)
    }

    //checks if the chosen iteraction is wrong, right, used, or a win
    handleInteraction(button) {
        if (this.activePhrase.includes(button.textContent)) {
            //this checkLetter() runs my showMatchedLetter()
            phrase.checkLetter(button)
            button.className = 'chosen'
            button.disable = true;
            if (this.checkForWin(this.activePhrase)) {
                this.gameOver(this.checkForWin(this.activePhrase))
            }
        } else {
            button.className = 'wrong'
            button.disable = true;
            this.removeLife()
        }
    }

    // //check if checkForWin is true/false
    // runGameOver(TF) {
    //     if (TF) {
    //         console.log('you win')
    //         this.gameOver(this.checkForWin(this.activePhrase))
    //     } else {
    //         console.log('correct')
    //     }
    // }

    //Checks if you have correctly gussed the phrase; for a win.
    checkForWin(active) {
        let lis = []
        let activeList = []
        //creates a list of active letters
        for (let i = 0; i < fullLi.length; i++) {
            lis.push(fullLi[i].textContent)
            activeList.push(active[i])
            console.log(lis)
        }
        //checks if you won
        if (lis.toString() === activeList.toString()) {
            return true
        }
        //else it is just correct
        else {
            console.log('correct')
            return false
        }
    }

    //remove a life from the players lifes
    removeLife() {
        console.log('wrong')
        this.missed++
        scoreboard.children[this.missed - 1].firstChild.setAttribute('src', 'images/lostHeart.png');
        //checks if lifes are gone
        if (this.missed === 5) {
            //runs this gameOver function
            this.gameOver(this.checkForWin(this.activePhrase))


        }
    }

    //game over function
    gameOver(word) {
        const gameOverMessage = document.getElementById("game-over-message")
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';
        this.missed = 0

        //throws away 
        for (let i = 0; i < this.activePhrase.length; i++) {
            let garbage = fullLiid.removeChild(fullLiid.firstChild)
        }
        for (let i = 0; i < scoreboard.children.length;) {
            //throws away extra hearts to
            let garbage = scoreboard.removeChild(scoreboard.children[i])
        }
        //adds the new hearts back in for next game
        for (let i = 5; i > scoreboard.children.length;) {
            scoreboard.insertAdjacentHTML('afterbegin', '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
        }
        //checks if the text was "Better Luck Next Time, That's The Wrong Phrase." to see if you lost or if you won 
        if (word === false) {

            //lost
            gameOverMessage.textContent = "[Better Luck Next Time, That's The Wrong Phrase.]";
            gameOverMessage.parentNode.className = 'lose'
            const wrong = document.querySelectorAll('.wrong')
            wrong.forEach(element => {
                element.className = 'key'
                element.disable = false;
            });
            const chosen = document.querySelectorAll('.chosen')
            chosen.forEach(element => {
                element.className = 'key'
                element.disable = false;
            });

            //won
        } else if (word === true) {
            gameOverMessage.textContent = "[Good Job, That's The Right Phrase.]";
            gameOverMessage.parentNode.className = 'win'
            const wrong = document.querySelectorAll('.wrong')
            wrong.forEach(element => {
                element.className = 'key'
            });
            const chosen = document.querySelectorAll('.chosen')
            chosen.forEach(element => {
                element.className = 'key'
            });
        } else {
            console.log('did not win or lose')
        }
    }
} 
