
document.addEventListener("DOMContentLoaded", () => {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( res => res.json() )
    .then( imgs => renderImgs(imgs["message"]) )
    .catch( error => console.log(error.message))
}

function renderImgs(array) {
    for (const img of array) {
        renderImg(img)
    }
}

function renderImg(img) {
    const picDiv = document.querySelector("#dog-image-container")
    const imag = document.createElement("img")
    imag.src = img
    picDiv.append(imag)
}



function getBreeds(breedObj) {
    const breeds = []
    for (const breed in breedObj) {
        if (breedObj[breed] === "[]") {
            breeds.push(breed)
        } else {
            for (let i = 0; i < breedObj[breed].length; i++) {
                breeds.push(`${breedObj[breed][i]} ${breed}`)
            }
        }
    }
    return breeds
}

function renderBreeds(array) {
    const dogUl = document.querySelector("#dog-breeds")
    for (breed of array) {
        const breedLi = document.createElement("li.breed")
        breedLi.textContent = breed
        dogUl.append(breedLi)
    }
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then( res => res.json() )
    .then(breeds => renderBreeds(getBreeds(breeds['message'])))
    .catch( error => console.log(error.message))
}
