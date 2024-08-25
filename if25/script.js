function solve() {
    let x = prompt("x ga son kiriting")
    let multiplication1 = x * 2
    let multiplication2 = -3 * x

    if (x < -2 || x > 2) {
        document.getElementById("demo").innerHTML = "Natija: " + multiplication1
    }
    else {
        document.getElementById("demo").innerHTML = "Natija: " + multiplication2
    }
}

