let input = document.querySelector("#input")
let button = document.querySelector("#button")

function reverse(){
        let str = input.value
        let rev = str.split("").reverse().join("")
    console.log(rev)
    let ans = document.querySelector("#answer")
    ans.innerHTML = rev
        input.value = ""

}

reverse()