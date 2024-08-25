function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")
    let d = prompt("2-butun sonni kiriting")

    if (a == b && b == c && a == c && a != d && b != d && c != d) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + d
    }

    else if (b == c && b == d && c == d && b != a && c != a && d != a) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + a
    }

    else if (a == b && b == d && a == d && a != c && b != c && d != c) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + c
    }

    else if (a == c && c == d && a == d && a != b && c != b && d != b) {
        document.getElementById("demo").innerHTML = "teng bo'lmagan sonning tartib raqami " + b
    }

    else if (a == b == c == d) {
        document.getElementById("demo").innerHTML = "barchasi teng"
    }

    else {
        document.getElementById("demo").innerHTML = "teng bo'lganlar soni 3ta emas"
    }
}