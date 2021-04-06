'use strict';

export default class PopUp {
    constructor() {
        this.popUp = document.querySelector('.pop-up');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }
    // 클릭 리스너 등록
    setClickListener(onClick) {
        this.onClick = onClick;
    }

    hide() {
        this.popUp.classList.add('pop-up--hide');
    }

    showWtihText(text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }
}