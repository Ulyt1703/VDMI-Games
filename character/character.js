let myLoad = document.querySelector(".load")
myLoad.classList.add("new-load")
/* 
let userPlayer = document.querySelectorAll(".players")
let myFocus = 0
userPlayer[myFocus].classList.add("new")
document.addEventListener("keydown", function(){
    userPlayer[myFocus].classList.remove("new")
    if(event.key === "ArrowRight" || event.key === "D" || event.key === "d"){
        myFocus = (myFocus + 1) % userPlayer.length
    }
    else if(event.key === "ArrowLeft" || event.key === "A" || event.key === "a"){
        myFocus = (myFocus - 1 + userPlayer.length) % userPlayer.length
    }
    userPlayer[myFocus].classList.add("new")
}) */


document.addEventListener("keydown", function(){
    let myLoading = document.querySelector(".loading")
    myLoading.classList.add("new")
    if(event.key === "Enter"){
        setTimeout(function(){
            window.location.href = "../playground/playground.html"
        },1850)
        setTimeout(function(){
            myLoading.classList.remove("new")
        },3100)
    }
})