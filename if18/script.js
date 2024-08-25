function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")

    if (a == b && a != c && b != c) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + c
    }

    else if (b == c && a != b && a != c) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + a
    }

    else if (a == c && b != c && b != a) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + b
    }

    else if (a == b && b == c && a == c) {
        document.getElementById("demo").innerHTML = "barchasi teng"
    }

    else {
        document.getElementById("demo").innerHTML = "o'zaro teng sonlar yo'q"
    }
}