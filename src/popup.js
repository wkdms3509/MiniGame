'use strict';

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popupRefresh = document.querySelector('.pop-up__refresh');
        this.popupMessage = document.querySelector('.pop-up__message')
        this.popupRefresh.addEventListener('click', () => {
            this.onclick && this.onclick();
            this.hide();
        });
    }

    setClickListener(onclick) {
        this.onclick = onclick();
    }

    showWithText(text) {
        this.popupMessage.innerHTML = text;
        this.popupMessage.remove('pop-up--hide');
    }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }
}