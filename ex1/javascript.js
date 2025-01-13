let number = 0;

function more(){
    let paragraph = document.getElementById("number");
    let number=number+1
    paragraph.textContent = paragraph;
}

function less(){
    let paragraph = document.getElementById("number");
    let number=number-1
    paragraph.textContent = number;
}


function reset(){
    let paragraph = document.getElementById("number");
    paragraph.textContent = 0;
}