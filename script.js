window.addEventListener("load", () => {
    let long;
    let lat;
    const timezone = document.querySelector('.location-timezone');
    const tempDesc = document.querySelector('.temperature-description');
    const tempDeg = document.querySelector('.temperature-degrees');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latititude;

            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const api = `${proxy}https://api.darksky.net/forecast/************************/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary} = data.currently;
                    tempDeg.textContent = temperature;
                    tempDesc.textContent = summary;
                    timezone.textContent = data.timezone;
                });
        });


    }
    // else {
    //     h1.textContent = "Hey this is not working"
    // }
});
