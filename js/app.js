/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let active;
// let phrase = new Phrase(phrases)//new phrase object
// let game = new Game(phrase)//new game object
let phrase//new phrase object
let game//new game object

// const phrase = new Phrase(phrases)//new phrase object
// const game = new Game(phrase)//new game object

const startButton = document.getElementById('btn__reset');
const letter = document.getElementById('qwerty');
const body = document.getElementById('body')
// phrase.addPhraseToDisplay(game.randomNumber())
// game.loadQuote()


//HTML elements
const scoreboard = document.getElementById('hearts')
const fullLi = document.getElementById('phrase').children
const fullLiid = document.getElementById('phrase')


//Starts the game.
body.addEventListener('click', (e) => {



    const button = e.target
    if (button.id === 'btn__reset') {
        game = new Game()
        phrase = new Phrase(game.phrases)//new phrase object
//new game object
        //runs getRandomPhrase from the new game class
        //runs addPhraseToDisplay from phrase class
        // phrase.addPhraseToDisplay(game.randomNumber())
        game.loadQuote()
        let newQuote = game.getRandomPhrase()
        //start game
        game.startGame(newQuote)
        console.log(game.activePhrase)
    }

    //event listener checks if you are wrong or if the letter is used
    if (button.className === 'key') {
        if (button.className !== 'wrong' && button.className !== 'chosen') {
            game.handleInteraction(button)
        } else {
            console.log('used')
        }
    }
});

