'use strict';

import PopUp from './popup.js';
import GameBuilder from './game.js';

// 팝업 클래스의 변수 생성
const gameFinishBanner = new PopUp();

const game = new GameBuilder()
.gameDuration(5)
.carrotCount(5)
.bugCount(5)
.build();

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

