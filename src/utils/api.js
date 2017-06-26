import axios from 'axios'

function fetchUserLocation() {
        navigator.geolocation.getCurrentPosition(function(location) {
            let long = location.coords.longitude
            let lat = location.coords.latitude

            return axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3cb6a0f45188f85433ae1e656726c8a9`)
                .then(function(response) {
                    console.log(response.data)
                })
        })
    }

export default fetchUserLocation