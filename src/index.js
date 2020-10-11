console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( res => res.json() )
    .then( imgs => renderImgs(imgs["message"]) )
    .catch( error => console.log(error.message))
})

function renderImgs(array) {
    for (const img of array) {
        renderImg(img)
    }
}

function renderImg(img) {
    const picDiv = document.querySelector("#dog-image-container")
    const imag = document.createElement("img")
    console.log(imag)
    console.log(picDiv)
    imag.src = img
    picDiv.append(imag)
}