let rate = 0
let i = 0
let options = document.querySelectorAll('.rate-note')

options.forEach(mapButtons)

function mapButtons() {
    options[i].addEventListener('click', getNote)
    i++
}

function getNote() {

    if (rate != 0) {
        document.getElementById(rate).classList.remove("checked-note")
    }

    rate = Number(this.innerHTML)
    this.classList.add("checked-note")
}

function submitRate() {
    if (rate === 0) {
        alert ('Escolha um nota')
    }
    else {
        cardRating = document.querySelector('div.card-rating')
        cardThankYou = document.querySelector('div.card-thankyou')
        spanNote = document.querySelector('span.span-thank-rating')

        cardRating.style.display = 'none'
        cardThankYou.style.display = 'block'
        spanNote.innerHTML = rate
    }
}

