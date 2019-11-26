function appear(a) {
            if (a === 1) {
                let obj = document.getElementById("stage1");
                obj.style.display = "inline";
            } else {
                let obj;
                let i = 2
                for (let stage = "stage"; i<=8;i++) {
                    obj = document.getElementById(stage+i);
                    obj.style.display = "inline";
                }
            }
}

nowStage = 1;

function changeState(next) {
    
    for (let i = 1; i <= 4; i++) {
        obj = document.getElementById("state" + i);
        obj.style.display = "none";
    }
    obj = document.getElementById("state" + next);
    obj.style.display = "inline";
}
function wait5(newState) {
    setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 5000);
    let obj = document.getElementById("analWord");
    obj.style.display = "none";
    let obj = document.getElementById("analData");
    obj.style.display = "in-line";
}