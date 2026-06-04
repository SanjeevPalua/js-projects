let num = document.querySelector("#input");
let btn = document.querySelector('button');
let result = document.querySelector("#result");

btn.onclick = () => {
    num.value % 2 === 0 ? result.innerHTML = "Even Value"
    : result.innerHTML = "Odd Value"
}