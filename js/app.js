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


const phrase = new Phrase(phrases)//new phrase object
const game = new Game(phrase)//new game object

const startButton = document.getElementById('btn__reset');
const letter = document.getElementById('qwerty');
phrase.addPhraseToDisplay(game.randomNumber())
game.loadQuote()
let newQuote;

//HTML elements
const scoreboard = document.getElementById('hearts')
const fullLi = document.getElementById('phrase').children
const fullLiid = document.getElementById('phrase')


//Starts the game.
startButton.addEventListener('click', (e) => {

    const button = e.target
    //runs getRandomPhrase from the new game class
    newQuote = game.getRandomPhrase()
    //runs addPhraseToDisplay from phrase class
    phrase.addPhraseToDisplay(newQuote)
    //start game
    game.startGame(newQuote)
    console.log(game.activePhrase)
})   


//event listener checks if you are wrong or if the letter is used
letter.addEventListener('click', (e) => {
    const letter = e.target;
    if (letter.tagName === 'BUTTON') {
        if (letter.className !== 'wrong' && letter.className !== 'chosen') {
            game.handleInteraction(letter)
        } else {
            console.log('used')
        }
    }
});