let display = document.getElementById('display');
let input = '';

document.getElementById('keyboard').addEventListener('click', (event) => {
    let target = event.target.innerText;

    if(target == 'C'){
        input = '';
        display.innerText = input;
    }
    else if(target == '='){
        input = eval(input);
        display.innerText = input;
    }
    else{
        input += target;
        display.innerText = input;
    }
})