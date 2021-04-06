'use strict';

import * as sound from './sound.js';

const CARROT_SIZE = 80;

export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.field.addEventListener('click', this.onClick); // (event) => this.onClick(event)
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }

    init() {
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, 'img/carrot.png');
        this._addItem('bug', this.bugCount, 'img/bug.png');
    }

    // 클래스 안에 있는 어떤 함수를 다른 콜백으로 전달할 때 
    onClick = event => {
        const target = event.target;
        if(target.matches('.carrot')) { // css 셀렉터의 해당 여부 확인
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick('carrot');
        } else if(target.matches('.bug')) {
            this.onItemClick && this.onItemClick('bug');
            sound.playBug();
        }
    };

    // 아이템 추가 
    _addItem(className, count, imgPath) {
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width - CARROT_SIZE;
        const y2 = this.fieldRect.height - CARROT_SIZE;

        for(let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    }
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
