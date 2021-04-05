'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 10;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect(); 
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpRefresh = document.querySelector('.pop-up__refresh');
const popUpText = document.querySelector('.pop-up__message');

// 게임 상태, 스코어, 타이머를 기억하고 있는 변수
let started = false;
let score = 0;
let timer = undefined;

field.addEventListener('click', onFieldClick);

// 게임 버튼 클릭 이벤트
gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    } else {
        startGame();
    }
    started = !started;
});

function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function stopGame() {
    stopGameTimer();
    hideGameButton();
    showPopUpWithText('REPLAY? 🤣');
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0){
            clearInterval(timer);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopUpWithText(text) {
    popUpText.innerText = text;
    popUp.classList.remove('pop-up--hide');
}

function initGame() {
    field.innerHTML = '';
    gameScore.innerText = CARROT_COUNT;
    addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(event) {
    if(!started) {
        return;
    }
    const target = event.target;
    if(target.matches('.carrot')) { // css 셀렉터의 해당 여부 확인
        target.remove();
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT) {
            finishGame(true);
        }
    } else if(target.matches('.bug')) {
        stopGameTimer();
        finishGame(false);
    }
}

function finishGame(win) {
    started = false;
    hideGameButton();
    showPopUpWithText(win ? 'YOU WIN! 💪' : 'YOU LOST...');
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;    
}

// 아이템 추가 
function addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;

    for(let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

// 필드의 randomNumber 
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}