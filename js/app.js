/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Phrases for the Game
const phrases = [
    'Life is like a box of chocolates',
    'ab ca',
    'bc db',
    'cd ec',
    'de fd',
    'ef ge',
    'fg hf',
    'gh ig',
    'hi  jh'
];


let active = 0;
let phrase = new Phrase(phrases)//new phrase object
let game = new Game(phrase)//new game object

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
        phrase = new Phrase(phrases)//new phrase object
        game = new Game(phrase)//new game object
        //runs getRandomPhrase from the new game class
        //runs addPhraseToDisplay from phrase class
        // phrase.addPhraseToDisplay(game.randomNumber())
        game.randomNumber()
        game.loadQuote()
        let newQuote = game.getRandomPhrase()
        phrase.addPhraseToDisplay(newQuote)
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

