console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()
    breedDropDown()
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(url => {
            addDogToDom(url)
        })
    })
}

function addDogToDom(image) {
    let dogContainer = document.querySelector("#dog-image-container")
    let img = document.createElement('img')
    img.src = image
    dogContainer.append(img)
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
        for (const breed in data.message) {
            addBreedToDom(breed)
        }
    })
}

function addBreedToDom(breed) {
    const ul = document.querySelector("#dog-breeds")
    const li = document.createElement('li')
    li.innerText = breed
    ul.append(li)
    li.addEventListener('click', () => {
        event.target.style.color = "red"
    })
}

function breedDropDown() {
    const dropDown = document.querySelector("#breed-dropdown")
    dropDown.addEventListener("change", (event) => {
        const letter = event.target.value
        console.log(letter)
        sortBreeds(letter)
    })
}

function sortBreeds(letter) {
   const ul = document.querySelector("#dog-breeds")
   console.log(letter) 
//    while (ul.firstChild) {
//        ul.innerText = ""
//    }

   const list = document.createElement('li')
}