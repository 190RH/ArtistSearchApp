








// fetch("http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=d65357239c139441a2c8a2098f069eca&user=joanofarctan&format=json")
//  .then((response) => {
//      return response.json()
//  })
//  .then((data) => {
//     console.log(data)
//     console.log(data.artists.artist[0])
//     document.getElementById("artistList").textContent = data.artists.artist[0].name
//  });

//
var artistURL = "http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=d65357239c139441a2c8a2098f069eca&user=joanofarctan&format=json"

function addArtists() {
    fetch(artistURL)
    .then((response) => {
    return response.json()    
})
    .then((data) => {
        console.log(data)
        var artistArray = data.artists.artist
        for (var i = 0; i < artistArray.length; i++) {
            var list = document.getElementById("artistList");
            var artistName = artistArray[i].name
            var btn = document.createElement("button")
                btn.innerText = artistArray[i].name
                btn.setAttribute("id", "artistBlock")
                btn.classList = btn.textContent
            var btnText = btn.innerText
            var div = document.createElement("div")
                div.setAttribute("id", btnText)
                list.appendChild(div)
                div.appendChild(btn)
                btn.addEventListener("click", e=> {
                    var a = document.createElement("a");
                    var albumsURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=d65357239c139441a2c8a2098f069eca&nameHere&format=json";
                    a.href = albumURL;
                    console.log(a)
                //      fetch(link)
                //      .then((response) => {
                //      return response.json()
                //  })
                //      .then((data) => {
                //          console.log(data)
                //          for (var i = 0; i < 5; i++) {
                //              console.log(data.topalbums.album[i])
                //          }
                //  })
            })
        }
    })
}

addArtists()



// http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=d65357239c139441a2c8a2098f069eca&user=joanofarctan&format=json

var albumsURL = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&api_key=d65357239c139441a2c8a2098f069eca&artist=Fennesz&format=json"

function addInfo() {
        fetch(albumsURL)
        .then((response) => {
        return response.json()
    })
        .then((data) => {
            console.log(data)
            for (var i = 0; i < 5; i++) {
                console.log(data.topalbums.album[i])
            }
        })
}
