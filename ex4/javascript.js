function checkResponse(){
    let phrase = document.getElementById("animalInput").value;
    let respuesta = document.getElementById("respuesta");
    respuesta.classList.add('opacity-100');
    respuesta.classList.remove('opacity-0');

    if (phrase.toLowerCase() == 'racoon'){
        respuesta.style.opacity = 1
        respuesta.textContent = "Correct!";
        respuesta.classList.remove('border-danger');
        respuesta.classList.remove('bg-danger');
        respuesta.classList.add('bg-success');
        respuesta.classList.add('border-success');
    } else {
        respuesta.style.opacity = 1
        respuesta.textContent = "Incorrect! Try again!";
        respuesta.classList.remove('bg-success');
        respuesta.classList.remove('border-success');
        respuesta.classList.add('border-danger');
        respuesta.classList.add('bg-danger');
    }
}

function reset(){
    let respuesta = document.getElementById("respuesta");

    respuesta.classList.remove('opacity-100');
    respuesta.classList.add('opacity-0');
}