let headerHome = document.querySelector(".header")
let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let titleBox = document.querySelector(".i-title-box")
let mainOne = document.querySelector(".main")
let mainTwo = document.querySelector(".main-2")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        headerHome.style.opacity = '1'
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
        titleBox.style.display = 'flex'
        mainTwo.style.opacity = '1'
        mainOne.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})


document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.getElementById("animatedText")
    let words = ["We are front-end developers", "New, young Generation", "We create websites and games", "Modern, interactive, responsive"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = words[currentWordIndex].slice(0, currentIndex)
        animatedText.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > words[currentWordIndex].length) {
            isDeleting = true
            currentIndex = words[currentWordIndex].length - 1
            setTimeout(animateText, 600)
        } 
        else {
            setTimeout(animateText, 60)
        }
        } 
        else {
            currentIndex--

        if (currentIndex === 0) {
            isDeleting = false
            currentWordIndex = (currentWordIndex + 1) % words.length
            setTimeout(animateText, 600)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedText.classList.remove("hidden")
        animateText()
    }, 950)
})




document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".profession-Danylo")
    let Words = ["Front-end Developer", "Student"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = Words[currentWordIndex].slice(0, currentIndex)
        animatedText.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > Words[currentWordIndex].length) {
            isDeleting = true
            currentIndex = Words[currentWordIndex].length - 1
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
            currentWordIndex = (currentWordIndex + 1) % Words.length
            setTimeout(animateText, 250)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedText.classList.remove("hidden")
        animateText()
    }, 1200)
})



document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".profession-Vladyslav")
    let wordsVladyslav = ["Front-end Developer", "Student"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = wordsVladyslav[currentWordIndex].slice(0, currentIndex)
        animatedText.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > wordsVladyslav[currentWordIndex].length) {
            isDeleting = true
            currentIndex = wordsVladyslav[currentWordIndex].length - 1
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
            currentWordIndex = (currentWordIndex + 1) % wordsVladyslav.length
            setTimeout(animateText, 250)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedText.classList.remove("hidden")
        animateText()
    }, 1200)
})

document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".profession-Ilya")
    let wordsVladyslav = ["Front-end Developer", "Student"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = wordsVladyslav[currentWordIndex].slice(0, currentIndex)
        animatedText.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > wordsVladyslav[currentWordIndex].length) {
            isDeleting = true
            currentIndex = wordsVladyslav[currentWordIndex].length - 1
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
            currentWordIndex = (currentWordIndex + 1) % wordsVladyslav.length
            setTimeout(animateText, 250)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedText.classList.remove("hidden")
        animateText()
    }, 1200)
})



document.addEventListener("DOMContentLoaded", function() {
    let animatedText = document.querySelector(".profession-Mykhailo")
    let wordsVladyslav = ["Front-end Developer", "Student"]
    let currentWordIndex = 0
    let currentIndex = 0
    let isDeleting = false

    function animateText() {
        let currentText = wordsVladyslav[currentWordIndex].slice(0, currentIndex)
        animatedText.textContent = currentText

        if (!isDeleting) {
            currentIndex++

        if (currentIndex > wordsVladyslav[currentWordIndex].length) {
            isDeleting = true
            currentIndex = wordsVladyslav[currentWordIndex].length - 1
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
            currentWordIndex = (currentWordIndex + 1) % wordsVladyslav.length
            setTimeout(animateText, 100)
        } 
        else {
            setTimeout(animateText, 40)
        }
    }
    }

    setTimeout(function() {
        animatedText.classList.remove("hidden")
        animateText()
    }, 1200)
})