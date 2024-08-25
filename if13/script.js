function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")


    if (a > c && b < c || a < c && b > c) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning o'rtachasi " + c
    }

    else if (a < b && c > b || a > b && b > c) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning o'rtachasi " + b
    }

    else if (a > b && a < c || a < b && a > c) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning o'rtachasi " + a
    }

    else if (a == b && b == c && a == c) {
        document.getElementById("demo").innerHTML = a + "=" + b + "=" + c
    }

}