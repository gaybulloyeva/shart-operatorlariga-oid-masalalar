function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")

    if (a > b) {
        document.getElementById("demo").innerHTML = a + ">" + b
    }

    else if (a == b) {
        document.getElementById("demo").innerHTML = a + "=" + b
    }

    else {
        document.getElementById("demo").innerHTML = a + "<" + b
    }
}