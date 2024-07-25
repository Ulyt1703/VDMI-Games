let headerHome = document.querySelector(".header")
let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let mainHome = document.querySelector(".main")
let footerHome = document.querySelector(".footer")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        headerHome.style.opacity = '1'
        mainHome.style.opacity = '1'
        footerHome.style.display = 'block'
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})

let information = [
    {text: "Questions? Need help? You can contact our "},
    {text: "support team at: "},
    {text: "+380508765434 or by e-mail: "},
    {text: "VDMIGames@gmail.com"}
]

let[
    {text: text1},
    {text: text2},
    {text: text3},
    {text: text4}
] = information

function getInfo(information){
    information.forEach(info => {
        footerHome.innerHTML = `
            <p class="description-footer">${text1}<br>${text2}<br>${text3}<br>
            ${text4}</p>
        `
    })
}
getInfo(information)



document.addEventListener("DOMContentLoaded", function() {
    let animatedTitleHome = document.getElementById("animated__title-home")
    let wordsHome = ["Lots of modern games", "We create interactive, immersive games"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = wordsHome[currentWordIndex].slice(0, currentIndex)
        animatedTitleHome.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > wordsHome[currentWordIndex].length) {
            isDeleting = true
            currentIndex = wordsHome[currentWordIndex].length - 1
            setTimeout(animateText, 1100)
        } 
        else {
            setTimeout(animateText, 60)
        }
        } 
        else {
            currentIndex--

        if (currentIndex === 0) {
            isDeleting = false
            currentWordIndex = (currentWordIndex + 1) % wordsHome.length
            setTimeout(animateText, 600)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedTitleHome.classList.remove("hidden")
        animateText()
    }, 950)
})