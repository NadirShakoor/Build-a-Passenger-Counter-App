let countEl = document.getElementById("counter")
let saveEl = document.getElementById("save-el")
let count = 0
console.log(countEl)
console.log(saveEl)

function increment(){
count += 1
countEl.innerText = count
}

function save(){
console.log(count)
let countstr = count + " - "
saveEl.textContent += countstr
countEl.textContent = 0
count = 0
}
