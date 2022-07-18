let rate = 0
let i = 0
let options = document.querySelectorAll('.rate-note')
let error = document.querySelector('span.span-error')
let sbt = document.querySelector('.button-submit')

options.forEach(mapButtons)

sbt.onclick = submitRate

function mapButtons() {
    options[i].onclick = getNote
    i++
}

function getNote() {

    if (rate != 0) {
        document.getElementById(rate).classList.remove("checked-note")
    }

    rate = Number(this.innerHTML)
    this.classList.add("checked-note")
    error.style.display = 'none'
}

function submitRate() {
    if (rate === 0) {
        error.style.display = 'inline-block'
        error.innerHTML = 'Select an option above'
    }
    else {
        let cardRating = document.querySelector('div.card-rating')
        let cardThankYou = document.querySelector('div.card-thankyou')
        let spanNote = document.querySelector('span.span-thank-rating')

        cardRating.style.display = 'none'
        cardThankYou.style.display = 'block'
        spanNote.innerHTML = rate
    }
}

