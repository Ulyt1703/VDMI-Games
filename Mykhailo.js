const radioPanel = document.getElementById('radioPanel');
const toggleButton = document.getElementById('toggleButton');
const playImage = document.getElementById('playImage');
const music = document.getElementById('music');
const moveImage = document.getElementById('moveImage');
const buttonQ = document.getElementById('q');
const buttonP = document.getElementById('p');

toggleButton.addEventListener('click', () => {
    togglePanel();
});

function togglePanel() {
    if (radioPanel.classList.contains('visible')) {
        radioPanel.classList.remove('visible');
        toggleButton.innerText = 'Radio';
    } else {
        radioPanel.classList.add('visible');
        toggleButton.innerText = 'Radio';
    }
}

playImage.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    toggleMoveImage();
});

let isMovedUp = false;
function toggleMoveImage() {
    if (isMovedUp) {
        moveImage.style.top = '0';
    } else {
        moveImage.style.top = '-100px';
    }
    isMovedUp = !isMovedUp;
}

let currentTrack = 0;
const tracks = ['/img/music0.mp3', '/img/music1.mp3', '/img/music2.mp3', '/img/music3.mp3', '/img/music4.mp3'];

function getNextTrackIndex(currentIndex, direction) {
    let nextIndex = currentIndex;

    do {
        if (direction === 'left') {
            nextIndex = (nextIndex + 1) % tracks.length;
        } else if (direction === 'right') {
            nextIndex = (nextIndex - 1 + tracks.length) % tracks.length;
        }
    } while (nextIndex === 4);

    return nextIndex;
}

function switchMusic(direction) {
    if (moveImage.style.top === '-100px') {
        currentTrack = getNextTrackIndex(currentTrack, direction);
        music.src = tracks[currentTrack];
        music.play();
    }
}

buttonQ.addEventListener('click', () => {
    switchMusic('left');
});

buttonP.addEventListener('click', () => {
    switchMusic('right');
});

music.addEventListener('ended', () => {
    switchMusic('right');
});

const container = document.getElementById('container');
const draggable = document.getElementById('draggable');
const positions = [0, 24, 55.6, 83.4, 111.2, 139, 166.8];
let currentPositionIndex = 0;
let isDragging = false;

draggable.onmousedown = function(event) {
    isDragging = true;
    document.onmousemove = function(event) {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left - draggable.offsetWidth / 2;

            let closestPosition = positions[0];
            let closestDistance = Math.abs(newLeft - positions[0]);
            for (let pos of positions) {
                let distance = Math.abs(newLeft - pos);
                if (distance < closestDistance) {
                    closestPosition = pos;
                    closestDistance = distance;
                }
            }

            draggable.style.left = closestPosition + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
    };

    return false;
};

draggable.ondragstart = function() {
    return false;
};


function updateTrack() {
    let trackIndex;
    if (moveImage.style.top === '-100px') {
        if (currentPositionIndex % 2 === 0) {
            trackIndex = 4;
        } else {
            trackIndex = Math.floor(currentPositionIndex / 2);
        }
        music.src = tracks[trackIndex];
        music.play();
    }
}

draggable.onmousedown = function(event) {
    isDragging = true;
    document.onmousemove = function(event) {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left - draggable.offsetWidth / 2;

            let closestPosition = positions[0];
            let closestDistance = Math.abs(newLeft - positions[0]);
            for (let pos of positions) {
                let distance = Math.abs(newLeft - pos);
                if (distance < closestDistance) {
                    closestPosition = pos;
                    closestDistance = distance;
                }
            }

            draggable.style.left = closestPosition + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
        currentPositionIndex = positions.indexOf(parseFloat(draggable.style.left));
        updateTrack();
    };

    return false;
};




/* const radioPanel = document.getElementById('radioPanel');
const toggleButton = document.getElementById('toggleButton');
const music = document.getElementById('music');
const moveImage = document.getElementById('moveImage');
const buttonQ = document.getElementById('q');
const buttonP = document.getElementById('p');
const container = document.getElementById('container');
const draggable = document.getElementById('draggable');
const positions = [0, 24, 55.6, 83.4, 111.2, 139, 166.8];
const tracks = ['/img/music0.mp3', '/img/music1.mp3', '/img/music2.mp3', '/img/music3.mp3', '/img/music4.mp3'];
let currentPositionIndex = 0;
let isDragging = false;

toggleButton.addEventListener('click', () => {
    togglePanel();
});

function togglePanel() {
    if (radioPanel.classList.contains('visible')) {
        radioPanel.classList.remove('visible');
        toggleButton.innerText = 'Radio';
    } else {
        radioPanel.classList.add('visible');
        toggleButton.innerText = 'Radio';
    }
}

function updateTrack() {
    let trackIndex;
    if (currentPositionIndex % 2 === 0) {
        trackIndex = 4;
    } else {
        trackIndex = Math.floor(currentPositionIndex / 2);
    }
    music.src = tracks[trackIndex];
    music.play();
}

draggable.onmousedown = function(event) {
    isDragging = true;
    document.onmousemove = function(event) {
        if (isDragging) {
            const containerRect = container.getBoundingClientRect();
            let newLeft = event.clientX - containerRect.left - draggable.offsetWidth / 2;

            // Find the closest position
            let closestPosition = positions[0];
            let closestDistance = Math.abs(newLeft - positions[0]);
            for (let pos of positions) {
                let distance = Math.abs(newLeft - pos);
                if (distance < closestDistance) {
                    closestPosition = pos;
                    closestDistance = distance;
                }
            }

            draggable.style.left = closestPosition + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;

        // Update the current position index
        currentPositionIndex = positions.indexOf(parseFloat(draggable.style.left));
        updateTrack();
    };

    return false; // Prevent text selection
};

draggable.ondragstart = function() {
    return false; // Prevent default drag behavior
};

buttonQ.addEventListener('click', () => {
    switchMusic('left');
});
buttonP.addEventListener('click', () => {
    switchMusic('right');
});
music.addEventListener('ended', () => {
    switchMusic('right');
});

function switchMusic(direction) {
    if (direction === 'left') {
        currentPositionIndex = (currentPositionIndex + 1) % positions.length;
    } else if (direction === 'right') {
        currentPositionIndex = (currentPositionIndex - 1 + positions.length) % positions.length;
    }
    draggable.style.left = positions[currentPositionIndex] + 'px';
    updateTrack();
} */