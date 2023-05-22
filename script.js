var hrs = document.getElementById('hrs');
var mns = document.getElementById('mns');
var scs = document.getElementById('scs');
var showhrs = document.getElementById('showhrs');
var showmns = document.getElementById('showmns');
var showscs = document.getElementById('showscs');

var count = 0;

function pad2(n) {
    return n < 10 ? '0' + n : n;
}

function show() {
    location.reload();
    var s = count % 60;
    var h = Math.floor(count / 3600);
    var m = Math.floor(count / 60) - (h * 60);
    showhrs.innerHTML = pad2(h);
    showmns.innerHTML = pad2(m);
    showscs.innerHTML = pad2(s);
}

function timer() {
    show();
    if (count-- > 0) {
        setTimeout(timer, 1000);
    }
}

btn10.addEventListener('click', function () {
    var m = 10;
    var current = count;
    count += (m * 60);
    (current <= 0) ? timer() : show ();
});

btn25.addEventListener("click", function () {
	var m = 25;
	var current = count;
	count += m * 60;
	current <= 0 ? timer() : show();
});

btn40.addEventListener("click", function () {
	var m = 40;
	var current = count;
	count += m * 60;
	current <= 0 ? timer() : show();
});

btn5.addEventListener("click", function () {
	var m = 5;
	var current = count;
	count += m * 60;
	current <= 0 ? timer() : show();
});

btn60.addEventListener("click", function () {
	var h = 1;
	var current = count;
	count += h * 3600;
	current <= 0 ? timer() : show();
});

btn120.addEventListener("click", function () {
	var h = 2;
	var current = count;
	count += h * 3600;
	current <= 0 ? timer() : show();
});

btn180.addEventListener("click", function () {
	var h = 3;
	var current = count;
	count += h * 3600;
	current <= 0 ? timer() : show();
});

reset.addEventListener("click", function () {
	var s = parseInt(scs.value, 10);
	var m = parseInt(mns.value, 10);
    var h = parseInt(hrs.value, 10);
	if (isNaN(s) || isNaN(m) || isNaN(h)) return;
	scs.value = 0;
	mns.value = 0;
    hrs.value = 0;

	var current = count;
	count = (h * 3600) + (m * 60) + s;
	current <= 0 ? timer() : show();
});