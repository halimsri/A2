function select_one(radio_button){
    if (this.__chk) 
        this.checked = false
}

function start_game(start_button){
    var start_button = document.getElementById('start_button');
    var game_page = document.getElementById('game_page');
    var start_page = document.getElementById('start_page');
    game_page.style.display = 'block';
    start_page.style.display = 'none';
}

var t = 0;

function pause_game(pause_button){
    var elem = document.getElementById('pause_button');
    if (elem.value=="PAUSE"){
        clearTimeout(t);
        elem.value = "RESUME";
    }
    else {
        elem.value = "PAUSE";
    }
}


function countdownTimer(secs) {
    var game_page = document.getElementById('game_page');
    var start_page = document.getElementById('start_page');
    var seconds = secs;
    //var mins = minutes;
    function tick() {
        var counter = document.getElementById("timer");
        seconds--;
        counter.innerHTML = 
"0" + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if(seconds > 0) {
            t = setTimeout(tick, 1000);
        }
        else {
                setTimeout(function () {
                    game_page.style.display = 'none';
                    start_page.style.display = 'block';
                }, 1000);
            }
        }
    tick();
}

