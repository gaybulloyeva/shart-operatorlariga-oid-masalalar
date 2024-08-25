function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("3-butun sonni kiriting")

    let step1 = Math.abs(a - b)
    let step2 = Math.abs(a - c)


    if (a > b && b > c) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + b + ", ular orasidagi masofa " + step1
    }

    else if (a > c && c > b) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step2
    }

    else if (b < a && a < c && b < c) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step1
    }

    else if (b < a && a < c && b < c) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step2
    }

    else if (c < a && c < b && a < b) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step2
    }

    else if (c < a && a < b && c < b) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step1
    }

    else if (a > c && a > b && b < c) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step2
    }

    else if (a > b && a > c && c < b) {
        document.getElementById("demo").innerHTML = "eng yaqin nuqta " + c + ", ular orasidagi masofa " + step1
    }

    else if (a == b == c) {
        document.getElementById("demo").innerHTML = "barchasi 1ta nuqtada yotadi"
    }
    else {
        document.getElementById("demo").innerHTML = "error"
    }
}

