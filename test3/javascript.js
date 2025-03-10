
// Para styles
function changeColor(){
    let header1 = document.getElementById("heading1");
    
    // alert(header1.textContent);
    header1.style.color = "blue"
}


// Para bootstrap
function changeBgColor() {
    let heading2 = document.getElementById("heading2");
    heading2.classList.add('bg-danger');
}

function resetBgColor() {
    let heading2 = document.getElementById("heading2");
    heading2.classList.remove('bg-danger');
}

function putText() {
    let p1 = document.getElementById("info");
    p1.textContent = "This page is loaded";
}

function changeParagraphs() {
    let paras = document.getElementsByTagName("p");

    alert(paras);

    for (let i = 0; i < paras.length; i++) {
        paras[i].textContent = "Changed " + i;
    }
}

function changeCase() {
    let p3 = document.getElementById("p3");
    let name = document.getElementById("name");

    p3.innerText = name.value.toUpperCase();
}

function changeFontSize() {
    let p4 = document.getElementById("p4");

    p4.classList.add('fs-1');
    p4.innerHTML="<span class ='text-danger'>Hello</span> Mr.Marshall";
}

function loadUserName() {
    let user1 = document.getElementById("user1");
    let num = Math.floor(Math.random() * 10) + 1; // Randomiza
    // el floor le quita los decimales a un numero (lo vuelve en entero)

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        if (num%2==0) { user1.innerText = data[num].name; }
        else {
            user1.innerText = data[num].id;
        }
    })
}