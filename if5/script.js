function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("3-butun sonni kiriting")

    if (a > 0 && b > 0 && c > 0) {
        document.getElementById("demo").innerHTML = "3ta kiritilgan sonlarning hammasi musbat"
    }

    else if (a > 0 && b > 0 && c < 0 || a > 0 && b < 0 && c > 0 || a < 0 && b > 0 && c > 0) {
        document.getElementById("demo").innerHTML = "kiritilganlarning 2tasi musbat 1tasi manfiy"
    }


    else {
        document.getElementById("demo").innerHTML = "barchasi manfiy"
    }

    if (a < 0 && b < 0 && c > 0 || a > 0 && b < 0 && c < 0 || a < 0 && b > 0 && c < 0) {
        document.getElementById("demo").innerHTML = "kiritilganlarning faqat bittasi musbat, 2tasi manfiy"
    }
}