
JavaScript: window.addEventListener('load', function() {
    window.scrollTo(0, 0)
})

let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})

let items = document.querySelectorAll(".menu li")
items.forEach((item) =>{
    item.addEventListener("click", () => {
        items.forEach((otherItem) => {
            otherItem.classList.remove("active")
        })
        item.classList.add("active")
    }
    )
})
document.addEventListener("keydown", function(){
    let myLoading = document.querySelector(".loading")
    myLoading.classList.add("new")
    if(event.key === "Enter"){
        setTimeout(function(){
            window.location.href="../character/character.html"
        },1850)
        setTimeout(function(){
            myLoading.classList.remove("new")
        },3100)
    }
})

