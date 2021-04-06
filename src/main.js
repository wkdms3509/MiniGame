'use strict';

import PopUp from './popup.js';
import Field from './field.js';

const CARROT_COUNT = 10;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 10;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

// 게임 상태, 스코어, 타이머를 기억하고 있는 변수
let started = false;
let score = 0;
let timer = undefined;

// sound 변수
// const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const bgSound = new Audio('sound/bg.mp3');
const alertSound = new Audio('sound/alert.wav');
const winSound = new Audio('sound/game_win.mp3');

// import한 클래스의 변수 생성
const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    startGame();
});

const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setClickListener((item) => onItemClick);

function onItemClick(item) {
    if(!started) {
        return;
    }
    if(item === 'carrot') { // css 셀렉터의 해당 여부 확인
        score++;
        updateScoreBoard();
        if(score === CARROT_COUNT) {
            finishGame(true);
        }
    } else if(item === 'bug') {
        finishGame(false);
    }
}

// 게임 버튼 클릭 이벤트
gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    } else {
        startGame();
    }
});

function startGame() {
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWtihText('REPLAY? 🤣');
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win) {
    started = false;
    hideGameButton();
    if(win) {
        playSound(winSound);
    } else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    gameFinishBanner.showWtihText(win ? 'YOU WIN! 💪' : 'YOU LOST...');
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
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
            finishGame(CARROT_COUNT === score);
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

function initGame() {
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_COUNT - score;    
}

