let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let scoreHome = 0
let scoreGuest = 0


let homeBtn1 = document.getElementById("home-btn-1")
let homeBtn2 = document.getElementById("home-btn-2")
let homeBtn3 = document.getElementById("home-btn-3")

let guestBtn1 = document.getElementById("guest-btn-1")
let guestBtn2 = document.getElementById("guest-btn-2")
let guestBtn3 = document.getElementById("guest-btn-3")


function homeOne() {
   scoreHome += 1
   homeEl.innerText = scoreHome
}

function homeTwo() {
   scoreHome += 2
   homeEl.innerText = scoreHome
}

function homeThree() {
   scoreHome += 3
   homeEl.innerText = scoreHome
}


function guestOne() {
   scoreGuest += 1
   guestEl.innerText = scoreGuest
}

function guestTwo() {
   scoreGuest += 2
   guestEl.innerText = scoreGuest
}

function guestThree() {
   scoreGuest += 3
   guestEl.innerText = scoreGuest
}





