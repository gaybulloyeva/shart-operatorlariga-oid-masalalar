function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")

    let sum1 = +a + +b
    let sum2 = +a + +c
    let sum3 = +b + +c

    if (a > c && b > c) {
        document.getElementById("demo").innerHTML = "Natija: " + sum1
    }

    else if (b > a && c > a) {
        document.getElementById("demo").innerHTML = "Natija: " + sum3
    }

    else if (a > b && c > b) {
        document.getElementById("demo").innerHTML = "Natija: " + sum2
    }

    else if (a == b && b == c && a == c) {
        document.getElementById("demo").innerHTML = "Natija: " + sum1
    }
}