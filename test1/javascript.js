// alert("This is JavaScript"); // Popup de alerta

function changeBg(){
    let paragraph = document.getElementById("para");
    paragraph.style.backgroundColor="red";
}

function changeBg2(){
    let paragraph = document.getElementById("para");
    paragraph.style.backgroundColor="blue";
}

function changeText(){
    let paragraph = document.getElementById("para");
    paragraph.textContent = "no";
}


// Se puede establecer como "boton" cualquier cosa
function seeInfo(){
    let paragraph2=document.getElementById("para2");
    document.write(paragraph2.innerHTML);
}

/*
---------------------------------------------
Llevando solo texto (sin el html como tal):
---------------------------------------------
function seeInfo(){
    let paragraph2=document.getElementById("para2");
    document.write(paragraph2.textContent);
}
---------------------------------------------
*/

function showInfo(){
    let user = '{"name":"María", "Surnames":"Veiga Ramírez"}';

    let userObj = JSON.parse(user);
    alert(userObj.name);
}

function showRestInfo(){
    fetch('https://api.restful-api.dev/objects?id=1')
    .then(response=>response.json())
    .then(data => alert(data[0].name))
    .catch(error => alert(error));
}