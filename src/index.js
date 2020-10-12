
document.addEventListener("DOMContentLoaded", () => {
    fetchImages()
    fetchBreeds()
    clickHandler()
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
        const breedLi = document.createElement("li")
        breedLi.classList.add("breed")
        breedLi.innerHTML = breed 
        dogUl.append(breedLi)
    }
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then( res => res.json() )
    .then(breeds => {
        renderBreeds(getBreeds(breeds['message']))
        filterBreeds(dropDown())
        filterHandler()
    })
    .catch( error => console.log(error.message))
}

function clickHandler() {
    const dogUl = document.querySelector("#dog-breeds")
    dogUl.addEventListener('click', e => {
        e.target.style.color = "red"
        
    })
}


function filterBreeds(letter) {
    const allBreeds = document.querySelectorAll(".breed")
    console.log(letter)
    for (breed of allBreeds) {
        if (breed.textContent[0] !== letter) {
            breed.hidden = true
        } else if (breed.hidden) {
            breed.removeAttribute("hidden")
        }
    }
}

function dropDown() {
    const drop = document.querySelector("#breed-dropdown")
    const selected = drop.options[drop.selectedIndex].value
    console.log(selected)
    return selected
}

function filterHandler() {
    const drop = document.querySelector("#breed-dropdown")
    drop.addEventListener("change", e => {
        filterBreeds(dropDown())
    })
}