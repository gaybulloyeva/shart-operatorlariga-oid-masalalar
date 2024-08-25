function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")

    if (a > b) {
        let c = a
        a = b
        b = c
        document.getElementById("demo").innerHTML = "A: " + a + ", B: " + b
    }

    else if (a == b) {
        document.getElementById("demo").innerHTML = a + "=" + b
    }

    else {
        document.getElementById("demo").innerHTML = "A: " + a + ", B: " + b
    }
}