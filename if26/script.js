function solve() {
    let x = prompt("x ga son kiriting")

    if (x <= 0) {
        document.getElementById("demo").innerHTML = "Natija: " + Math.abs(x)
    }

    else if (0 < x && x < 2) {
        document.getElementById("demo").innerHTML = "Natija: " + x ** 2
    }

    else if (x >= 2) {
        document.getElementById("demo").innerHTML = "Natija: " + 4
    }
}

