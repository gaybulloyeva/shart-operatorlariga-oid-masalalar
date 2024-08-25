function solve() {
    let x = prompt("x ga son kiriting")
    let y = prompt("y ga son kiriting")

    if (x != 0 && y != 0) {
        if (x > 0 && y > 0) {
            document.getElementById("demo").innerHTML = "1-chorakda yotadi"
        }

        else if (x < 0 && y > 0) {
            document.getElementById("demo").innerHTML = "2-chorakda yotadi"
        }

        else if (x > 0 && y < 0) {
            document.getElementById("demo").innerHTML = "4-chorakda yotadi"
        }

        else {
            document.getElementById("demo").innerHTML = "3-chorakda yotadi"
        }
    }

    else {
        document.getElementById("demo").innerHTML = "ox va oy koordinata o'qlarida yotmasligi kerak"
    }

}

