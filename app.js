function getNum(num) {
    var calInput = document.getElementById('calInput');
    calInput.value += num;
}

function clearBtn() {
    var calInput = document.getElementById('calInput');
    calInput.value = ""
}

function getResult() {
    var calInput = document.getElementById('calInput');
    calInput.value = eval(calInput.value)
}

function back(){
    var back=document.getElementById('calInput');
    back.value=back.value.slice(0,-1);
}