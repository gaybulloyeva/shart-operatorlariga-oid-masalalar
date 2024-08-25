function solve() {
    let a = prompt("sonni kiriting")
    let juft = a % 2

    if (a > 0 && juft == 0) {
        document.getElementById("demo").innerHTML = a + " musbat juft son"
    }

    else if (a > 0 && juft != 0) {
        document.getElementById("demo").innerHTML = a + " musbat toq son"
    }

    else if (a < 0 && juft != 0) {
        document.getElementById("demo").innerHTML = a + " manfiy toq son"
    }

    else if (a < 0 && juft == 0) {
        document.getElementById("demo").innerHTML = a + " manfiy juft son"
    }

    else if (a == 0) {
        document.getElementById("demo").innerHTML = "son 0 ga teng"
    }
}

