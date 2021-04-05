'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder, Reason } from './game.js';

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withGameDuration(5)
  .withcarrotCount(5)
  .withbugCount(5)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch(reason) {
    case Reason.cancel:
      message = 'REPLAY? 🤷‍♂️';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WIN! 🙌';
      sound.playwin();
      break;
    case Reason.lose:
      message = 'LOSE.. 🤢';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.serClickListener(() => {
  game.start();
});




