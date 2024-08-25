function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")


    if (a > c && b > c) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + c
    }

    else if (a > b && c > b) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + b
    }

    else if (a < b && a < c) {
        document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + a
    }

    else if (a == b && b == c && a == c) {
        document.getElementById("demo").innerHTML = a + "=" + b + "=" + c
    }

}