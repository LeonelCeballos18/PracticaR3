const URL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=cher&api_key=06b9520b33dbb8d67cc8e5092e9ccd3a&format=json";

function getMusicData(){
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist =>{
        return{
            id: artist.mbid,
            name: artist.name,
            Image: artist.image[0]['#text']
        }
    }))
}