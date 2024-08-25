function solve() {
    let a = prompt("1-butun sonni kiriting")
    let b = prompt("2-butun sonni kiriting")
    let c = prompt("2-butun sonni kiriting")

    let step1 = a * 2
    let step2 = b * 2
    let step3 = c * 2

    if (a > 0 && b > 0 && c > 0) {
        if (a < b && b < c) {
            document.getElementById("demo").innerHTML = step1 + ", " + step2 + ", " + step3
        }

        else {
            document.getElementById("demo").innerHTML = -Math.abs(a) + ", " + -Math.abs(b) + ", " + -Math.abs(c)
        }
    }

    else if (a < 0 && b < 0 && c < 0) {
        if (a < b && b < c) {
            document.getElementById("demo").innerHTML = step1 + ", " + step2 + ", " + step3
        }

        else {
            document.getElementById("demo").innerHTML = Math.abs(a) + ", " + Math.abs(b) + ", " + Math.abs(c)
        }
    }
}