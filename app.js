const nehezseg = document.getElementById("nehezség_buttom")
const nehezsegHTML = document.getElementById("nehezseg_container")
const buttom_container = document.getElementById("buttom_container")
const temaHTML = document.getElementById("tema_container")
const tema = document.getElementById("tema_buttom")
const topics = document.querySelectorAll(".topic_containerBasic")
let topicsArr = [...topics]
const diff = document.querySelectorAll(".difficult_containerBasic")
let diffArr = [...diff]
const topicButtons = document.querySelectorAll(".topic_buttom")
let topicsButt = [...topicButtons]
const fooldal = document.getElementById("fooldal")
const valasz = document.getElementById("valassz")
const home = document.getElementById("home")
const navbar = document.getElementById("navbar")
const vocab_buttom = document.getElementById("nav_vocab")
const vocab_item = document.querySelectorAll(".vocab_item")
const theme_buttom = document.getElementById("nav_theme")
const theme_item = document.querySelectorAll(".theme_item")
const nav_read = document.getElementById("nav_read")
const read_item = document.querySelectorAll(".read_item")
const nav_tense = document.getElementById("nav_tense")
const tense_item = document.querySelectorAll(".tense_item")

nav_tense.addEventListener("click", () => {
    tense_item.forEach(item => {item.classList.toggle("hidden")})
})



home.addEventListener("click", () => {
    navbar.classList.toggle("navbar_animation")
})

vocab_buttom.addEventListener("click", () => {
    vocab_item.forEach(item => {item.classList.toggle("hidden")})
})
theme_buttom.addEventListener("click", () => {
    theme_item.forEach(item => {item.classList.toggle("hidden")})
})
nav_read.addEventListener("click", () => {
    read_item.forEach(item => {item.classList.toggle("hidden")})
})



let topicDeterminator = 0;

nehezseg.addEventListener('click', () => {
nehezsegHTML.classList.remove("hidden");
buttom_container.classList.add("hidden")
valasz.classList.add("hidden")
    fooldal.classList.remove("hidden")
})

tema.addEventListener('click', () => {
    temaHTML.classList.remove("hidden")
    buttom_container.classList.add("hidden")
    valasz.classList.add("hidden")
    fooldal.classList.remove("hidden")
} )

fooldal.addEventListener('click', () => {
    temaHTML.classList.add("hidden")
    nehezsegHTML.classList.add("hidden")
    buttom_container.classList.remove("hidden")
    fooldal.classList.add("hidden")
    valasz.classList.remove("hidden")
})

function setVisibility() {
    if (topicDeterminator < 99){
    topicsArr[topicDeterminator - 1].classList.add("topic_container")
    topicsArr[topicDeterminator - 1].classList.remove("hidden")
} else {
    diffArr[topicDeterminator - 101].classList.add("topic_container");
    diffArr[topicDeterminator - 101].classList.remove("hidden");
}
}

topicsButt.forEach(button => {
    button.addEventListener('click', () => {
        topicDeterminator = button.id;

        if (topicDeterminator < 99){
        topicsArr.forEach(topic => {
            topic.classList.remove('topic_container')
            topic.classList.add('hidden')
            setVisibility()
        })
    } else {
        diffArr.forEach(diff => {
            diff.classList.remove('topic_container')
            diff.classList.add('hidden')
            setVisibility()
        })
    }
    })
})