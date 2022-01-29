/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(phrase) { 
        this.newArray = [];
        this.missed = 0;
        this.phrases = phrase;
        this.activePhrase = null;

    }

    //Random Number
    randomNumber() {
      for (let i=0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * this.phrases.phrases.length);
        this.newArray.push( this.phrases.phrases[randomNumber]);
            this.phrases.phrases.splice(randomNumber,1)
       }
    }

    //gets the quote and logs it out
    loadQuote() {
        this.newArray.forEach((item, index) => {
            console.log(`Phrase ${index +1} - phrase: ${item}`);
        });
    }
    
    //returns the random phrase
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.newArray.length);
        const newPhrase = this.newArray[randomNumber];
        console.log(`Random Phrase ${randomNumber + 1} - phrase: ${this.newArray[randomNumber]}`);
        // this.newArray.splice(randomNumber,1)
        console.log(this.newArray)
        return newPhrase;
    }
    
    //starts the game up and sets the overlay display to none
    startGame(active) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = active;
    }

    //checks if the chosen iteraction is wrong, right, used, or a win
    handleInteraction(button) {
        if ( phrase.checkLetter(button) ) {
            button.className = 'chosen'
            this.checkForWin(this.activePhrase)
        }else {
            button.className = 'wrong'
            this.removeLife()
        }
    }

    //Checks if you have correctly gussed the phrase; for a win.
    checkForWin(active) {
        let lis = []
        let activeList =[]
        //creates a list of active letters
        for (let i = 0; i < fullLi.length; i++) {
                lis.push(fullLi[i].textContent)
                activeList.push(active[i])
                console.log(lis)
        }
        //checks if you won
      if(lis.toString() === activeList.toString()) {
        console.log('you win')
        this.gameOver("[Good Job, That's The Right Phrase.]")
      } 
      //else it is just correct
      else {
        console.log('correct')
      }
    }

    //remove a life from the players lifes
    removeLife() {
        console.log('wrong')
        scoreboard.removeChild(scoreboard.lastElementChild);
        this.missed++
        //checks if lifes are gone
        if (this.missed === 5) {
            //runs this gameOver function
            this.gameOver("[Better Luck Next Time, That's The Wrong Phrase.]")


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
            for ( let i = 0; i < scoreboard.children.length;) {
                //throws away extra hearts to
               let garbage = scoreboard.removeChild(scoreboard.children[i])
            }
                //adds the new hearts back in for next game
               for (let i = 5; i > scoreboard.children.length ;) {
             scoreboard.insertAdjacentHTML('afterbegin', '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
        }
        //checks if the text was "Better Luck Next Time, That's The Wrong Phrase." to see if you lost or if you won 
        if ("[Better Luck Next Time, That's The Wrong Phrase.]" === word) {
            
            //lost
            gameOverMessage.textContent = word;
            gameOverMessage.parentNode.className = 'lose'
            const wrong = document.querySelectorAll('.wrong')
            wrong.forEach(element => {
                element.className = 'key'
            });
            const chosen = document.querySelectorAll('.chosen')
            chosen.forEach(element => {
                element.className = 'key'
            });

            //won
        } else {
            gameOverMessage.textContent = word;
            gameOverMessage.parentNode.className = 'win'
            const wrong = document.querySelectorAll('.wrong')
            wrong.forEach(element => {
                element.className = 'key'
            });
            const chosen = document.querySelectorAll('.chosen')
            chosen.forEach(element => {
                element.className = 'key'
            });
        }
    }
} 
