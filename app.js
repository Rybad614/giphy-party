const form = document.querySelector(".search-bar")
const search = document.querySelector("#search");
const giphy = document.querySelector("#gif");
const removeBtn = document.querySelector("#remove");

async function gifSearch(q) {
    const response = await axios.get('https://api.giphy.com/v1/gifs/search',
    {params: {
        q, 
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }});
    getGifUrl(response);
    console.log(response);
}

function getGifUrl(response) {
    let rdmIdx = Math.floor(Math.random() * 49);
    appendGif(response.data.data[rdmIdx].images.original.url);
}

function appendGif(url) {
    const div = document.createElement('div');
    giphy.append(div);
    const img = document.createElement('img');
    img.src = url;
    div.append(img);
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    gifSearch(search.value);
    search.value = "";
});

removeBtn.addEventListener("click", function(e) {
    giphy.innerHTML = "";
})

