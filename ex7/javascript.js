function showInfo() {
    let random = Math.floor(Math.random() * 20);

    fetch('https://api.slingacademy.com/v1/sample-data/users/' + random)
        .then(response => response.json())
        .then(data => { 
            
        document.getElementById('text1').innerHTML = data.user.first_name;
        document.getElementById('text2').innerHTML = 'Job: ' + data.user.job;
        document.getElementById('text3').innerHTML = 'Phone: ' + data.user.phone;
        document.getElementById('text4').innerHTML = 'City: ' + data.user.city;
        document.getElementById('text5').innerHTML = 'Country: ' + data.user.country;
    })
        .catch(error => alert(error));

}