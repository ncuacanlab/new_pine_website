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
selected = 0
items = [0,0,0]

function changeState(next) {
    
    for (let i = 1; i <= 4; i++) {
        aa = document.getElementById("state" + i);
        aa.style.display = "none";
    }
    aa = document.getElementById("state" + next);
    aa.style.display = "inline";

    
    for (let i = 1; i <= 4; i++) {
        aa = document.getElementById("step" + i);
        aa.style.backgroundColor = "#6c757d";
    }
    aa = document.getElementById("step" + next);
    aa.style.backgroundColor = "#007bff";

    if(next === 4){
        wait5(1);
    }
}

function wait5(newState) {
    setTimeout(function () {
        aa = document.getElementById("analWord");
        aa.style.display = "none";
        aa = document.getElementById("analData");
        aa.style.display = "inline";
    }, 3000);

}

function selectItemm() {
    var table = document.getElementById("attr");
    var item = table.options[table.selectedIndex].value;
    table.options[0].selected = true;
    aa = document.getElementById(item);
    aa.style.display = "inline";
    selected+=1;
    document.getElementById("attriu").textContent = selected +" attribute selected";
}
function dis(b) {
    aa = document.getElementById("item" + b);
    aa.style.display = "none";
    selected-=1;
    document.getElementById("attriu").textContent = selected +" attribute selected";
}
function clearr() {
    for (let i = 1; i <= 3; i++) {
        aa = document.getElementById("item" + i);
        aa.style.display = "none";
    }
    selected = 0;
    document.getElementById("attriu").textContent = "0 attribute selected";
}
function showt(idd) {
    
    if(selected !== 0){
        aa = document.getElementById(idd);
        aa.style.display = "inline";
    }
    
}

function modeC(now,tab) {
    aa = document.getElementById("state" + now);
    aa.style.display = "none";
    setTimeout(function () {
        aa.style.display = "inline";
    }, 200);

    for (let i = 1; i <= 2; i++) {
        bb = document.getElementById("b" + now + i);
        bb.style.backgroundColor="white";
    }
    bb = document.getElementById("b" + now+ tab);
    bb.style.backgroundColor="#b0b0b0";
}