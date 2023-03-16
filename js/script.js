let body = document.getElementById("body");
let card = document.getElementById("kart");
let rasm = document.getElementById("chiroq");
let text = document.getElementById ("matin")

// function switchOn (){
//     rasm.src = "images/on.jpg";
//     body.style.background = "white";
//     card.style.background = "white";
//     text.style.color = "black";
//     text.textContent = "chiroq yondi"
// }

// function switchOff (){
//     rasm.src = "images/off.jpg";
//     body.style.background = "black";
//     card.style.background = "black";
//     text.style.color = "white";
//     text.textContent = "chiroq ochti"
// }
let button = document.getElementById("tugma");


function switchOff() {
    if(rasm.src.match("images/off.jpg")){
        rasm.src = "images/on.jpg";
        button.textContent = "chiroq yondi";
        text.style.color = "green";
    }
    else {
        rasm.src = "images/off.jpg";
        button.textContent = "chiroq ochti";
        text.style.color = "red";
    }
}