let user = document.querySelector('#user');
let computer = document.querySelector('#computer');
let result = document.querySelector('#result');
let choices = document.querySelectorAll('button');


choices.forEach(choice => {
    choice.addEventListener('click', e => {
            // console.log(choice.id);
            user.innerText = choice.id;
            computerChoice()
            res()
    })
})

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * choices.length +1);
    randomNumber === 1 ? computer.innerHTML = "rock"
   :randomNumber === 2 ? computer.innerHTML = "paper"
   :randomNumber === 3 ? computer.innerHTML = "scissors": "Invalid";
}

function res(){
    user.innerText === computer.innerText ? result.innerHTML = "its a draw"
        :user.innerText === "rock" && computer.innerText === "paper" ? result.innerHTML = "You Lost"
        :user.innerText === "paper" && computer.innerText === "scissors" ? result.innerHTML = "You Lost"
        :user.innerText === "scissors" && computer.innerText === "rock" ? result.innerHTML = "You Lost"
        :result.innerHTML="You Won";
}