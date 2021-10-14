/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
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
const phrase = new Phrase( phrases )
const game = new Game(phrase)
const startButton = document.getElementById('btn__reset');
const letter = document.getElementById('qwerty');
game.randomQuotes()
game.loadQuote()
let newQuote;
const scoreboard = document.getElementById('hearts')
const fullLi = document.getElementById('phrase').children
const fullLiid = document.getElementById('phrase')

startButton.addEventListener('click', (e) => {

    const button = e.target
    newQuote = game.getRandomPhrase()
    phrase.addPhraseToDisplay(newQuote)
    game.startGame(newQuote)
    console.log(game.activePhrase)
})

// document.addEventListener('keydown', (e) =>{
//     const button = e.code.toString()[3].toLowerCase();
// const buttonElement = document.querySelector(`.${button}`)
// // if (button === document.querySelector(`.${button}`)) {
//     if (buttonElement.className !== 'wrong' && buttonElement.className !== 'chosen') {
//         game.handleInteraction(buttonElement) 
//        } else {
//         console.log('used')
//       }
// });

letter.addEventListener('click', (e) => {
    // const fullLi = document.getElementById('phrase').children
    const button = e.target;
    if (button.tagName === 'BUTTON') {
    if (button.className !== 'wrong' && button.className !== 'chosen') {
    game.handleInteraction(button) 
    } else {
        console.log('used')
    }
}
    //    console.log('right')

    //    const li = document.getElementById('phrase').children[active]
    //    li.textContent = game.activePhrase;
    //    li.style.color = 'black';
    //     active++;
    //    game.activePhrase = newQuote[active]
    //    if ( game.activePhrase ===  " ") {
    //     active++
    //     game.activePhrase = newQuote[active]
    //    }
    //    console.log(game.activePhrase)

    // } else {
    //     console.log('wrong')
    //     scoreboard.removeChild(scoreboard.lastElementChild);
    //     game.missed++
    //     if (game.missed === 5) {
    //         for (let i = 0; i < fullLi.length;) {
    //         fullLi.removeChild(fullLi.lastElementChild)
    //         }
    //         const overlay = document.getElementById('overlay');
    //         overlay.style.display = '';
    //         removeChild
    //         for (let i = 0; i < 5 ; i ++) {
    //         scoreboard.insertAdjacentHTML('afterbegin', '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>')
    //         }
    //     }
    // }
});