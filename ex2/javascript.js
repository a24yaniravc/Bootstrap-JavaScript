let number = 0;

function more(){
    let paragraph = document.getElementById("number");
    number++;
    paragraph.textContent = number;
}

function less(){
    let paragraph = document.getElementById("number");
    number--;
    paragraph.textContent = number;
}


function reset(){
    let paragraph = document.getElementById("number");
    number = 0;
    paragraph.textContent = number;
}