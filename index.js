

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}









// let name = 40
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)



// let welcomeEl = document.getElementById("welcome-el")

// let name = "JP"
// let greeting = "What's good "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += " 👋"