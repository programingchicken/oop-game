/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//insert element last in the parent element
function insertLast(parent, newElement) {
    parent.insertBefore(newElement, parent.lastChild);
}

//phrase class
class Phrase {
    constructor(phrase) {
        //makes the hole phrse into lower case so you can match it
        this.phrases = phrase.map(quote => quote.toLowerCase());
    }

    //checks if letter is correct or not correct
    checkLetter(button) {
        if (game.activePhrase.includes(button.textContent.toLowerCase())) {
            this.showMatchedLetter(document.querySelectorAll(`.${button.textContent}`), button.textContent)
return true;
        } else {
            return false;
        }
    }

    //shows the letter fuction
    showMatchedLetter(li, button) {
        for (let i = 0; i < li.length; i++) {
                li[i].textContent = button;
                li[i].className = 'show';
        }
    }
}
