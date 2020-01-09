
threefirst = 1;
function appear(a) {
            if (threefirst === 1) {
                let obj = document.getElementById("stage1");
                obj.style.display = "inline";
                threefirst = 2;

            } else {
                let obj;
                let i = 2
                var table = document.getElementById("mmm");
                var item = table.options[table.selectedIndex].value;
                
                if(item === '2'){
                    document.getElementById("CNNN").style.display = "inline";
                    document.getElementById("SVMM").style.display = "none";
                }else{
                    for (let stage = "stage"; i<=10;i++) {
                        obj = document.getElementById(stage+i);
                        obj.style.display = "inline";
                    }
                    document.getElementById("SVMM").style.display = "inline";
                    document.getElementById("CNNN").style.display = "none";
                }
            }
            var table = document.getElementById("mmm");
            var item = table.options[table.selectedIndex].value;
            if(item === '2'){
                document.getElementById("qqq").innerHTML = 'CNN';
                document.getElementById("qq").innerHTML = 'DNN';
            }else{
                document.getElementById("qqq").innerHTML = 'SVM_C';
                document.getElementById("qq").innerHTML = 'SVM_R';
            }
}

nowStage = 1;
selected = 0
items = [0,0,0]
firstShow = 0;
next = 1;

function changeState(gogo) {
    next = next+gogo;
    if(next<1){
        next = 1;
    }

    aa = document.getElementById("kkk");
    aa.style.display = "inline";
    aa = document.getElementById("kkkk");
    aa.style.display = "inline";
    for (let i = 1; i <= 4; i++) {
        aa = document.getElementById("state" + i);
        aa.style.display = "none";
    }
    aa = document.getElementById("forgood");
    aa.style.display = "inline";
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
    if(item === 'item1'){
        if(items[0] === 1){
            return;
        }
        items[0] = 1;
    }else if(item === 'item2'){
        if(items[1] === 1){
            return;
        }
        items[1] = 1;
    }else{
        if(items[2] === 1){
            return;
        }
        items[2] = 1;
    }
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
    if("item" + b === 'item1'){
        items[0] = 0;
    }else if("item" + b === 'item2'){
        items[1] = 0;
    }else{
        items[2] = 0;
    }
    document.getElementById("attriu").textContent = selected +" attribute selected";
}
function clearr() {
    for (let i = 1; i <= 3; i++) {
        aa = document.getElementById("item" + i);
        aa.style.display = "none";
    }
    for (let i = 0; i <= 2; i++) {
        items[i] = 0;
    }
    selected = 0;
    document.getElementById("attriu").textContent = "0 attribute selected";
}
function showt(idd) {
    colnow = 0;
    if(selected !== 0){
        aa = document.getElementById(idd);
        aa.style.display = "inline";
        var tb = document.getElementById('tabb');
        

        if(firstShow === 0){
            row = tb.insertRow(tb.rows.length);
            for(let i = 0; i<=2; i++){
                
                if(items[i] > 0){
                    var cell = row.insertCell();
                    cell.innerHTML='item'+(i+1);

                }
                
            }


            for(let q = 1 ; q<100;q++){
                row = tb.insertRow(tb.rows.length);
                for(i = 0; i<3;i++){
                   if(items[i]===1){
                       if(i === 1){
                        var cell = row.insertCell();
                        cell.innerHTML = '<img src="img/analPic/'+q+'.png">';
                       }else{
                        var cell = row.insertCell();
                        cell.innerHTML = Math.random().toFixed(9)+'';
                       }
                   }

                }
                for (var k = 0; k <3-selected; k++) {
                    var cell = row.insertCell();
                    cell.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                    
                }
            }
            firstShow = 1;
        }else{

            try {
                    for(let i = 0; i<=2; i++){
                
                        for (var k = 0; k <100; k++) {
                            tb.rows[k].cells[i].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                        }
                    } 
                }
                catch (e) {

                }
  
            for(let u = 0; u<=2; u++){
                
                if(items[u] > 0){
                    if(u ===1){
                        tb.rows[0].cells[colnow].innerHTML='item'+(u+1);
                        for (var k = 1; k <100; k++) {
                            tb.rows[k].cells[colnow].innerHTML= '<img src="here.png">';
                        }
                        colnow = colnow +1;
                    }else{
                        tb.rows[0].cells[colnow].innerHTML='item'+(u+1);
                        for (var k = 1; k <100; k++) {
                            tb.rows[k].cells[colnow].innerHTML=Math.random().toFixed(9)+'';
                        }
                        colnow = colnow +1;
                    }
                }
                
            }
        }
    }
    colnow = 0;
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
function same() {
    colnow = 0;
    aa = document.getElementById("state1");
    aa.style.display = "inline";
    aa = document.getElementById("forgood");
    aa.style.display = "none";
    aa = document.getElementById("kkk");
    aa.style.display = "none";
    aa = document.getElementById("kkkk");
    aa.style.display = "none";
    var table = document.getElementById("meo");
    var item = table.options[table.selectedIndex].value;
    var tb = document.getElementById('tabb');
    try {
        for(let i = 0; i<=2; i++){
    
            for (var k = 0; k <100; k++) {
                tb.rows[k].cells[i].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        } 
    }
    catch (e) {

    }

for(let u = 0; u<=2; u++){
    
    if(items[u] > 0){
        if(u ===1){
            tb.rows[0].cells[colnow].innerHTML='item'+(u+1);
            for (var k = 1; k <100; k++) {
                tb.rows[k].cells[colnow].innerHTML= '<img src="here.png">';
            }
            colnow = colnow +1;
        }else{
            tb.rows[0].cells[colnow].innerHTML='item'+(u+1);

            if(item === '1'){
                
                for (var k = 1; k <100; k++) {
                    tb.rows[k].cells[colnow].innerHTML=Math.random().toFixed(9)+'';
                }
            }else if(item === '2'){
                for (var k = 1; k <100; k++) {
                    if(Math.random()>0.7){
                        tb.rows[k].cells[colnow].innerHTML=Math.random().toFixed(9)+'';
                    }else{
                        tb.rows[k].cells[colnow].innerHTML='-'+Math.random().toFixed(9)+'';
                    }
                }
            }else if(item === '3'){
                for (var k = 1; k <100; k++) {
                    tb.rows[k].cells[colnow].innerHTML=Math.random().toFixed(2)*100+'';
                }
            }else{
                for (var k = 1; k <100; k++) {
                    tb.rows[k].cells[colnow].innerHTML=Math.random().toFixed(2)/10+'';
                }
            }

            colnow = colnow +1;
        }
    }
    
}
    
}

function layerr(num) {
    try{
        tmp = document.getElementById("layy").value;
        num = parseInt(tmp)
        if(num>10){
            num = 10;
        }else if(num<1){
            return 0;
        }
        for(i = 0 ;i<10;i++){
            document.getElementById("ll"+i).style.display = "none";
        }
        for(i = 0 ;i<num;i++){
            document.getElementById("ll"+i).style.display = "inline";
        }
    }catch(e){

    }
}
