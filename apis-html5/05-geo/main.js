if (navigator.geolocation) {
    console.log('disponible')

    // Position

    navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            console.log(position)
        },
        error => {
            console.log('Error Geo')
        }
    );
}

