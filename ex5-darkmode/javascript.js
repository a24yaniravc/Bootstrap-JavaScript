

/*image.addEventListener("mouseover", function() {
    image.style.opacity= 1;
});

image.addEventListener("mouseout", function() {
    image.style.opacity= 0;
});*/

function incrementOpacity(id) {
    let image = document.getElementById(id);
    image.style.opacity = 1;
}

function decreaseOpacity(id) {
    let image = document.getElementById(id);
    image.style.opacity = 0;
}
