function showDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const image = `<img src=${data['message']} alt='Random Dog'>`
        console.log(image)
        document.querySelector(".image").innerHTML = image;
    });
}

async function showAsyncDog() {
    const reponse = await fetch("https://dog.ceo/api/breeds/image/random")
    var data = await reponse.json()
    console.log(data['message'])
    const image = `<img src=${data['message']} alt='Random Dog'>`
    console.log(image)
    document.querySelector(".image").innerHTML = image;
}