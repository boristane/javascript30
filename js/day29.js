document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.display__time-left');
    const endTime = document.querySelector('.display__end-time');
    const buttons = document.querySelectorAll('[data-time]');


    let countdown;
    function displayTimeLeft(seconds){
        const minutes = Math.floor(seconds/60);
        remainderSeconds = seconds%60;

        const display = `${paddindZeros(minutes, 2)}:${paddindZeros(remainderSeconds, 2)}`;
        timerDisplay.textContent = display;
        document.title = display;
    }

    function displayEndTime(timeStamp){
        const end = new Date(timeStamp);
        const hour = end.getHours();
        const minute = end.getMinutes();
        const second = end.getSeconds();

        endTime.textContent = `Be back at ${paddindZeros(hour, 2)}:${paddindZeros(minute, 2)}:${paddindZeros(second, 2)}`
    }

    timer(0);

    function timer(seconds){
        const now = Date.now();
        const then = now + seconds*1000;
        displayTimeLeft(seconds);
        displayEndTime(then)
        clearInterval(countdown);
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now())/1000);
            if(secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    buttons.forEach(button => button.addEventListener('click', function(){
        timer(this.dataset.time);
    }));

    document.customForm.addEventListener('submit', function(e){
        e.preventDefault();
        timer(this.minutes.value * 60);
        this.reset();
    });

});

function paddindZeros(num, len = 2){
    let result = num.toString();
    while(result.toString().length < len){
        result = '0' + result;
    }
    return result;
}



