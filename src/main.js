'use strict';

import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

// 팝업 클래스의 변수 생성
const gameFinishBanner = new PopUp();

const game = new GameBuilder()
.gameDuration(7)
.carrotCount(10)
.bugCount(6)
.build();

game.setGameStopListener((reason) => {
    console.log(reason);
    let message;
    switch(reason) {
        case Reason.cancel : 
            message = 'REPLAY? 🤣';
            sound.playAlert();
            break;
        case Reason.win :
            message = 'YOU WIN! 💪';
            sound.playWin();
            break;
        case Reason.lose :
            message = 'YOU LOSE... 💩';
            sound.playBug();
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWtihText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});

