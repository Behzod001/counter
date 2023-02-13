// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// // }

 
// let username = "per"
// let message = "You have three notifications"
// let messageToUser = message + ", " + username + "!" 


// console.log(messageToUser)

// let myName = "Behzod"
// let greeting = "Hi, My name is "

// let myGreeting = greeting  + myName + "!"

// // console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Behzod"
// let greeting = "Welcome back !"

// welcomeEl.innerText = greeting + name


// welcomeEl.innerText += "👋"

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment () {
    count += 1
    countEl.textContent  = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    
}


