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

    
    randomQuotes() {
      for (let i=0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * this.phrases.phrases.length);
        this.newArray.push( this.phrases.phrases[randomNumber]);
            this.phrases.phrases.splice(randomNumber,1)
       }
    }

    loadQuote() {
        this.newArray.forEach((item, index) => {
            console.log(`Phrase ${index +1} - phrase: ${item}`);
        });
    }
     
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.newArray.length);
        const newPhrase = this.newArray[randomNumber];
        console.log(`Random Phrase ${randomNumber + 1} - phrase: ${this.newArray[randomNumber]}`);
        // this.newArray.splice(randomNumber,1)
        console.log(this.newArray)
        return newPhrase;
    }

    startGame(active) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = active;
    }

    handleInteraction(button) {
        if ( phrase.checkLetter(button) ) {
            button.className = 'chosen'
            this.checkForWin(this.activePhrase)
        }else {
            button.className = 'wrong'
            this.removeLife()
        }
    }

    checkForWin(active) {
        let lis = []
        let activeList =[]
        for (let i = 0; i < fullLi.length; i++) {
                lis.push(fullLi[i].textContent)
                activeList.push(active[i])
                console.log(lis)
        }
      if(lis.toString() === activeList.toString()) {
      console.log('you win')
      this.gameOver("[Good Job, That's The Right Phrase.]")
      } else {
      console.log('correct')
      }
    }

    removeLife() {
        console.log('wrong')
        scoreboard.removeChild(scoreboard.lastElementChild);
        this.missed++
        if (this.missed === 5) {
            this.gameOver("[Better Luck Next Time, That's The Wrong Phrase.]")


    }
}

    gameOver(word) {
        const gameOverMessage = document.getElementById("game-over-message")
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';
        this.missed = 0
        for (let i = 0; i < this.activePhrase.length; i++) {
            let garbage = fullLiid.removeChild(fullLiid.firstChild)
            }
            for ( let i = 0; i < scoreboard.children.length;) {
               let garbage = scoreboard.removeChild(scoreboard.children[i])
            }
               for (let i = 5; i > scoreboard.children.length ;) {
             scoreboard.insertAdjacentHTML('afterbegin', '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
        }
        if ("[Better Luck Next Time, That's The Wrong Phrase.]" === word) {
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
