let headerHome = document.querySelector(".header")
let textHeaderMobile = document.querySelector(".text__header-mobile")
let headerLabel = document.querySelector(".header__label")
let restartButton = document.querySelector(".restart-button")
let mainHome = document.querySelector(".main")
let containerSecondGame = document.querySelector(".Container__second-game")
let footerHome = document.querySelector(".footer")
let loading = document.querySelector(".loading")
window.addEventListener("load", function() {
    window.scrollTo(0, 0)
    setTimeout(function(){
        headerHome.style.opacity = '1'
        mainHome.style.display = 'grid'
        footerHome.style.display = 'block'
        containerSecondGame.style.display = 'block'
        textHeaderMobile.style.opacity = '1'
        headerLabel.style.opacity = '1'
    },900)
    loading.classList.add("animation")
    setTimeout(function(){
        loading.classList.remove("animation")
    },900)
})

restartButton.addEventListener("click", function(){
    restartButton.style.backgroundColor = "#bba503"
    setTimeout(function(){
        restartButton.style.backgroundColor = "#9B2226"
    },30)
})

let size = 4
let container = document.getElementById('grid-container')
let scoreElement = document.getElementById('score')
let score = 0
let cells = []

function createBoard() {
    for (let i = 0; i < size * size; i++) {
        cells.push({
            value: 0,
            element: document.getElementById(`cell-${i}`)
        })
    }
}

function updateBoard() {
    cells.forEach((cell, index) => {
        cell.element.textContent = cell.value ? cell.value : ''
        cell.element.dataset.value = cell.value
    })
    scoreElement.textContent = score
}

function addRandomTile() {
    let emptyCells = cells.filter(cell => cell.value === 0)
    if (emptyCells.length === 0) return
    let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    randomCell.value = Math.random() < 0.9 ? 2 : 4
}

function move(direction) {
    let moved = false

    for (let i = 0; i < size; i++) {
        let rowOrColumn = []
        for (let j = 0; j < size; j++) {
            let index = direction === 'left' || direction === 'right' ?
                i * size + j : j * size + i;
            rowOrColumn.push(cells[index].value)
        }

        if (direction === 'right' || direction === 'down') {
            rowOrColumn.reverse()
        }

        let newRowOrColumn = slideAndCombine(rowOrColumn)

        if (direction === 'right' || direction === 'down') {
            newRowOrColumn.reverse()
        }

        for (let j = 0; j < size; j++) {
            let index = direction === 'left' || direction === 'right' ?
                i * size + j : j * size + i
            if (cells[index].value !== newRowOrColumn[j]) {
                moved = true
            }
            cells[index].value = newRowOrColumn[j]
        }
    }

    if (moved) {
        addRandomTile()
        updateBoard()
        if (!canMove()) {
            setTimeout(function(){
                alert('Гра закінчена!')
            },1000)
        }
    }
}

function slideAndCombine(array) {
    let result = array.filter(val => val !== 0)
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) {
            result[i] *= 2
            score += result[i]
            result.splice(i + 1, 1)
            result.push(0)
        }
    }
    return [...result, ...Array(size - result.length).fill(0)]
}

function canMove() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - 1; j++) {
            if (cells[i * size + j].value === 0 ||
                cells[i * size + j].value === cells[i * size + j + 1].value ||
                cells[j * size + i].value === cells[(j + 1) * size + i].value) {
                return true
            }
        }
    }
    return false
}

function handleKeyDown(event) {
    switch (event.key) {
        case 'W':
            moveUp()
            break;
        case 'S':
            moveDown()
            break;
        case 'A':
            moveLeft()
            break;
        case 'D':
            moveRight()
            break;
        case 'w':
            moveUp()
            break;
        case 's':
            moveDown()
            break;
        case 'a':
            moveLeft()
            break;
        case 'd':
            moveRight()
            break;
        case 'ц':
            moveUp()
            break;   
        case 'ы':
            moveDown()
            break; 
        case 'ф':
            moveLeft()
            break; 
        case 'в':
            moveRight()
            break; 
        case 'Ц':
            moveUp()
            break;   
        case 'Ы':
            moveDown()
            break; 
        case 'Ф':
            moveLeft()
            break; 
        case 'В':
            moveRight()
            break; 
        case 'і':
            moveDown()
            break; 
        case 'І':
            moveDown()
            break; 
    }
}


        let touchStartX = 0
        let touchStartY = 0

        container.addEventListener('touchstart', function (e) {
            touchStartX = e.touches[0].clientX
            touchStartY = e.touches[0].clientY
            e.preventDefault()
            handleKeyDown(e)
        })

        container.addEventListener('touchend', function (e) {
            let touchEndX = e.changedTouches[0].clientX
            let touchEndY = e.changedTouches[0].clientY
            handleGesture(touchStartX, touchStartY, touchEndX, touchEndY)
            e.preventDefault()
            handleKeyDown(e)
        })

        function handleGesture(startX, startY, endX, endY) {
            let diffX = endX - startX
            let diffY = endY - startY
            
            if (Math.abs(diffX) > Math.abs(diffY)){
                if (diffX > 0) {
                    moveRight()
                } else {
                    moveLeft()
                }
            } else {
                if (diffY > 0) {
                    moveDown()
                } else {
                    moveUp()
                }
            }
        }

        function moveLeft() {
            move('left')
        }

        function moveRight() {
            move('right')
        }

        function moveUp() {
            move('up')
        }

        function moveDown() {
            move('down')
        }


function restartGame() {
    score = 0
    cells.forEach(cell => cell.value = 0)
    addRandomTile()
    addRandomTile()
    updateBoard()
}

document.addEventListener('keydown', handleKeyDown)

createBoard()
restartGame()


document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            event.preventDefault()
            handleKeyDown(event)
            break;
        default:
            break;
    }
})