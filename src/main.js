'use strict';

import PopUp from './popup.js';
import Game from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

// 팝업 클래스의 변수 생성
const gameFinishBanner = new PopUp();

const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason) {
        case 'cancel':
            message = 'REPLAY? 🤣';
            break;
        case 'win':
            message = 'YOU WIN! 💪';
            break;
        case 'lose':
            message = 'YOU LOSE... 💩';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWtihText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});

