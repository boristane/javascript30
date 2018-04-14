document.addEventListener('DOMContentLoaded', () => {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    const buttonStart = document.querySelector('.start-game');

    let timeUp = false;
    let score;

    function peep(){
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            if(!timeUp) peep();
            hole.classList.remove('up');
        }, time)
    }

    function startGame(){
        score = 0;
        scoreBoard.textContent = score;
        peep();
        setTimeout(() => {
            timeUp = true;
        }, 10*1000)
    }

    function bonk(e){
        if(!e.isTrusted) return;
        score += 1;
        scoreBoard.textContent = score;
        this.classList.remove('up');
    }

    moles.forEach(mole => mole.addEventListener('click', bonk));
    buttonStart.addEventListener('click', startGame);
});

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index = Math.floor(Math.random()*holes.length);
    return holes[index];
}

