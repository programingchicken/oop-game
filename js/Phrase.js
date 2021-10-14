/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
function insertLast(parent, newElement) {
    parent.insertBefore(newElement, parent.lastChild);
}

class Phrase {
    constructor(phrase) {
        this.phrases = phrase.map(quote => quote.toLowerCase());
    }

    addPhraseToDisplay(randomQuoteNumber) {
        console.log(randomQuoteNumber)
        const newArray = Object.assign([], randomQuoteNumber)
        newArray.forEach((element) => {
            const letter = element
            const li = document.createElement('li');
            if (letter === " ") {
                li.className = `hide space`
                li.textContent = " ";
            } else {
                li.className = `hide letter ${letter}`
            }

            const phraseDiv = document.getElementById('phrase');
            insertLast(phraseDiv, li)
        });
    }

    checkLetter(button) {
        if (game.activePhrase.includes(button.textContent.toLowerCase())) {
            this.showMatchedLetter(document.querySelectorAll(`.${button.textContent}`), button.textContent)
return true;
        } else {
            return false;
        }
    }

    showMatchedLetter(li, button) {
        for (let i = 0; i < li.length; i++) {
                li[i].textContent = button;
                li[i].className = 'show';
        }
    }
}
