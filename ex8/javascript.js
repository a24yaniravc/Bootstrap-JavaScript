function showImages() {
    let random = Math.floor(Math.random() * 20);

    fetch('https://api.slingacademy.com/v1/sample-data/users/' + random)
        .then(response => response.json())
        .then(data => { 
            
        document.getElementById('img1').innerHTML =
        document.getElementById('img2').innerHTML = 
        document.getElementById('img3').innerHTML =
        document.getElementById('img4').innerHTML =
        document.getElementById('img5').innerHTML = 
        document.getElementById('img6').innerHTML = 
        document.getElementById('img7').innerHTML = 
        document.getElementById('img8').innerHTML = 
        document.getElementById('img9').innerHTML =
    })
        .catch(error => alert(error));

}