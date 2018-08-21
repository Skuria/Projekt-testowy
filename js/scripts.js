const number11 = document.getElementById('number1');
const number22 = document.getElementById('number2');
const resultm = document.getElementById('resultm');
const resultd = document.getElementById('resultd');
const wynik = document.getElementById('wynik');

let wynikmnozenia = '';
let wynikdzielenia = '';

function checkresultm() {
	wynikmnozenia = number11.value * number22.value; 
    wynik.innerHTML = `${wynikmnozenia}`;
}
function checkresultd() {
	wynikdzielenia = number11.value / number22.value;
	wynik.innerHTML = `${wynikdzielenia}`;
}

function footertime(){
	let time = new Date();
	let day = time.getDate();
	let month = time.getMonth()+1;
	let year = time.getFullYear();
	let time2;
	if (month < 10){month = '0'+ month;}
	time2 = year + "." + month + "." + day;
	let send = document.getElementById("footertime").innerHTML = `${time2}`;
}

window.onload =  footertime();
resultm.addEventListener('click', checkresultm);
resultd.addEventListener('click', checkresultd);