let input = document.getElementById('year');
let btn = document.querySelector("button")
let result = document.querySelector('#result')



function checkYear(){
    let year = parseInt(input.value);
    year % 400 === 0 ? result.innerHTML = "Leap Year"
        : year % 100 === 0 ? result.innerHTML = "Not a Leap Year"
            : year % 4 === 0 ? result.innerHTML = "Leap Year"
                : result.innerHTML = "Not a Leap Year";
}

btn.onclick = checkYear;