function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")

    if (a > c && b > c) {
        if (a > b && a > c) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + c + " kattasi esa " + a
        }

        else if (b > a && b > c) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + c + " kattasi esa " + b
        }
    }

    if (a > b && c > b) {
        if (a > b && a > c) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + b + " kattasi esa " + a
        }

        else if (c > a && c > b) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + b + " kattasi esa " + c
        }
    }


    if (b > a && c > a) {
        if (b > a && b > c) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + a + " kattasi esa " + b
        }

        else if (c > a && c > b) {
            document.getElementById("demo").innerHTML = "kiritilgan sonlarning eng kichigi " + a + " kattasi esa " + c
        }
    }


    else if (a == b && b == c && a == c) {
        document.getElementById("demo").innerHTML = a + "=" + b + "=" + c
    }


}