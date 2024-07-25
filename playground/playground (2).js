let myLoad = document.querySelector(".load")
myLoad.classList.add("new-load")

let currentLevel = 1;

// Level 1
let correctSquareIndex = 1; 

document.addEventListener("DOMContentLoaded", () => {
  generateSquares();
  document.getElementById("level-1").classList.add("active");
});

function generateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square, index) => {
    square.addEventListener("click", (e) => {
      if (index === correctSquareIndex) {
        e.target.classList.add("correct");
        setTimeout(() => {
          nextLevel();
        }, 1000);
      } else {
        e.target.classList.add("incorrect");
        setTimeout(() => {
          e.target.classList.remove("incorrect");
        }, 500);
      }
    });
  });
}

// Level 2
let correctShape;

document.getElementById("level-2").addEventListener("click", (e) => {
  if (e.target.classList.contains("shape")) {
    if (e.target === document.querySelector(".shape:nth-child(3)")) {
      correctShape = e.target;
      correctShape.classList.add("correct");
      setTimeout(() => {
        nextLevel();
      }, 1000);
    } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
        e.target.classList.remove("incorrect");
      }, 500);
    }
  }
});


//Level 3

document.getElementById("level-3").addEventListener("click", (e) => {
  if (e.target.id === "square-1") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});


//Level 4

document.getElementById("level-4").addEventListener("click", (e) => {
  if (e.target.id === "square-5") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});

//Level 5

document.getElementById("level-5").addEventListener("click", (e) => {
  if (e.target.id === "square-2") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
//Level 6

document.getElementById("level-6").addEventListener("click", (e) => {
  if (e.target.id === "square-5") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
//Level 7

document.getElementById("level-7").addEventListener("click", (e) => {
  if (e.target.id === "square-5") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
//Level 8

document.getElementById("level-8").addEventListener("click", (e) => {
  if (e.target.id === "square-2") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
//Level 9

document.getElementById("level-9").addEventListener("click", (e) => {
  if (e.target.id === "square-4") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
//Level 10

document.getElementById("level-10").addEventListener("click", (e) => {
  if (e.target.id === "square-1") {
      setTimeout(() => {
          nextLevel();
      }, 1000);
  } else {
      e.target.classList.add("incorrect");
      setTimeout(() => {
          e.target.classList.remove("incorrect");
      }, 500);
  }
});
// Level 11: Click to Win
let clickSquare;
let clickCount = 0;

function getRandomColor(){
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

document.getElementById("level-11").addEventListener("click", (e) => {
  clickSquare = document.getElementById("click-square");
  clickCount++;
  clickSquare.style.width = clickSquare.style.height = (50 + clickCount * 10) + "px";
  clickSquare.style.backgroundColor = getRandomColor();
  if (clickCount === 10) {
    setTimeout(() => {
      winGame();
    }, 1000);
  }
});

function winGame() {
  document.getElementById("win-message").classList.add("active");
  clearInterval(timerInterval);
}
function nextLevel() {
  currentLevel++;
  document.getElementById(`level-${currentLevel - 1}`).classList.remove("active");
  document.getElementById(`level-${currentLevel}`).classList.add("active");
}









