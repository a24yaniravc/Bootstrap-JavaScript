

/*image.addEventListener("mouseover", function() {
    image.style.opacity= 1;
});

image.addEventListener("mouseout", function() {
    image.style.opacity= 0;
});*/

function incrementOpacity(){
    let image = document.getElementById("imagen");
    image.style.opacity=1;
}

function decreaseOpacity(){
    let image = document.getElementById("imagen");
    image.style.opacity=0;
}