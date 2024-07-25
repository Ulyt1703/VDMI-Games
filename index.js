



const inputA = document.querySelector(".main__calculator-any-buttona")
const inputb = document.querySelector(".main__calculator-any-buttonb")
const inputseleckt = document.querySelector(".main__calculator-any-buttonselect")
const inputbtn = document.querySelector(".main__calculator-any-button")
const output = document.querySelector(".main__calculator-any-text")


inputbtn.addEventListener('click',function() {
    const a = Number(inputA.value);
    const b = Number(inputb.value);
    const operation = inputseleckt.value;

    const result = calculete({
        a,
        b,
        operation
    });
    output.innerHTML = result;
});
/* 1 KALKULATOR */










document.addEventListener("keydown", function(){
    let myLoading = document.querySelector(".loading")
    myLoading.classList.add("new")
    if(event.key === "Enter"){
        setTimeout(function(){
            window.location.href="../players/index.html"
        },1850)
        setTimeout(function(){
            myLoading.classList.remove("new")
        },3100)
    }
})
document.addEventListener("keydown", function(){
    let myLoading = document.querySelector(".load")
    myLoading.classList.add("new")
    if(event.key === "Enter"){
        setTimeout(function(){
            window.location.href="../players/index.html"
        },1850)
        setTimeout(function(){
            myLoading.classList.remove("new")
        },3100)
    }
})
window.addEventListener('load', function() {
    window.scrollTo(0, 0)
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






/* CALULATEDEB 2 */


const inputC = document.querySelector(".main__calculator-any-buttonC")
const inputE = document.querySelector(".main__calculator-any-buttonE")
const inputBut2 = document.querySelector(".but2")

inputBut2.addEventListener('click',function(){
    let inputc =  Number(inputC.value)
    let inpute = Number(inputE.value)
    let sum = 0 
    if(inputc !== 0  && inpute !== 0 ){
        sum = inpute * inputc / 100

    }
    output.innerHTML = result
})


