function solve() {
    let a = prompt("butun sonni kiriting")
    let sum = +a + 1

    if (a >= 0) {
        document.getElementById("demo").innerHTML = "Natija: " + sum
    }

    else {
        document.getElementById("demo").innerHTML = "manfiy son kiritdingiz"
    }
}