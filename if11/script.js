function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")

    let sum = +a + +b

    if (a == b) {
        document.getElementById("demo").innerHTML = "Natija: " + 0
    }

    else if (a > b) {
        document.getElementById("demo").innerHTML = a + ">" + b
    }

    else {
        document.getElementById("demo").innerHTML = a + "<" + b
    }
}