
// const  block = document.querySelector(".block")
// const openModal  = document.querySelector("button")
//
//
// openModal.addEventListener("click", ()=> {
//     block.style.display = "block"
//
//     if (openModal.innerHTML === "Open Modal") {
//         openModal.innerHTML = "close Modal"
//     }
//     else {
//         block.style.display = "none"
//         openModal.innerHTML = "Open Modal"
//     }
// })

const desserts = document.querySelector('.desserts')
const hotDrinks = document.querySelector('.hot-drinks')
const coldDrinks = document.querySelector('.cold-drinks')
const nationalFoods = document.querySelector('.national-foods')
const easternCuisine = document.querySelector('.eastern-cuisine')
const fastFoods = document.querySelector('.fast-foods')
const tabs = document.querySelector(".tabs")
const ponys = document.querySelector(".ponys")
const labels = document.querySelectorAll(".labels")
const sabis = document.querySelectorAll(".sabis")

desserts.style.display = "none"
hotDrinks.style.display = "none"
coldDrinks.style.display = "none"
nationalFoods.style.display = "none"
easternCuisine.style.display = "none"
fastFoods.style.display = "none"

// const sabis = document.querySelectorAll(".sabis")
sabis[0].addEventListener('click', () => {
    desserts.style.display = "block"
    fastFoods.style.display = "none"
    hotDrinks.style.display = "none"
    easternCuisine.style.display = "none"
    coldDrinks.style.display = "none"
    nationalFoods.style.display = "none"
// labels.style.margin = "0 0 -800px 100px"/
    // desserts.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 100px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
    // sabis.style.margin = "0"
})
sabis[1].addEventListener('click', () => {
    desserts.style.display = "none"
    hotDrinks.style.display = "block"
    coldDrinks.style.display = "none"
    easternCuisine.style.display = "none"
    fastFoods.style.display = "none"
    nationalFoods.style.display = "none"
    // hotDrinks.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 100px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
})
sabis[2].addEventListener('click', () => {
    desserts.style.display = "none"
    hotDrinks.style.display = "none"
    coldDrinks.style.display = "block"
    nationalFoods.style.display = "none"
    easternCuisine.style.display = "none"
    fastFoods.style.display = "none"
    // coldDrinks.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 100px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
})
sabis[3].addEventListener('click', () => {
    desserts.style.display = "none"
    hotDrinks.style.display = "none"
    coldDrinks.style.display = "none"
    nationalFoods.style.display = "block"
    easternCuisine.style.display = "none"
    fastFoods.style.display = "none"
    // nationalFoods.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 100px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
})
sabis[4].addEventListener('click', () => {
    desserts.style.display = "none"
    hotDrinks.style.display = "none"
    coldDrinks.style.display = "none"
    nationalFoods.style.display = "none"
    easternCuisine.style.display = "block"
    fastFoods.style.display = "none"
    // easternCuisine.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 60px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
})
sabis[5].addEventListener('click', () => {
    desserts.style.display = "none"
    hotDrinks.style.display = "none"
    coldDrinks.style.display = "none"
    nationalFoods.style.display = "none"
    easternCuisine.style.display = "none"
    fastFoods.style.display = "block"
    // fastFoods.style.margin = "0 0 -800px 500px"
    // tabs.style.padding = "150px 100px 0 0"
    ponys.style.margin = "100px 0 100px 605px"
})