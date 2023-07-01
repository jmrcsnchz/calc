var equation = document.getElementById('equation');


function calc(input){
	equation.value = equation.value + input;
}

function clearInput(){
	equation.value = '';
}
function solve(){
	equation.value = eval(equation.value);
}
function backspace(){
	equation.value = equation.value.slice(0, -1);
}