function solve() {
    let x = prompt("x ga son kiriting")
    let y = prompt("y ga son kiriting")

    if(x==0&&y==0){
        document.getElementById("demo").innerHTML=0
    }

    else if(x!=0&&y==0){
        document.getElementById("demo").innerHTML=1
    }

    else if(x==0&&y!=0){
        document.getElementById("demo").innerHTML=2
    }

    else if(x!=0&&y!=0){
        document.getElementById("demo").innerHTML=3
    }

}

