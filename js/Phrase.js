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

    //adds phrase to display
    addPhraseToDisplay(randomQuoteNumber) {
        console.log(randomQuoteNumber)
        const newArrays = Object.assign([], randomQuoteNumber)
        newArrays.forEach((element) => {
            const letter = element
            const li = document.createElement('li');
            //hids letter and spaces
            if (letter === " ") {
                li.className = `hide space`
                li.textContent = " ";

                //letters
            } else {
                li.className = `hide letter ${letter}`
            }

            const phraseDiv = document.getElementById('phrase');
            insertLast(phraseDiv, li)
        });
    }

    //shows the letter fuction
    showMatchedLetter(li, button) {
        for (let i = 0; i < li.length; i++) {
            li[i].textContent = button;
            li[i].className = 'show';
        }
    }
}
