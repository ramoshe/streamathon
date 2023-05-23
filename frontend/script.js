var hrs = document.getElementById('hrs');
var mns = document.getElementById('mns');
var scs = document.getElementById('scs');
var showhrs = document.getElementById('showhrs');
var showmns = document.getElementById('showmns');
var showscs = document.getElementById('showscs');

var count = 0;

async function logJSONData() {
	await fetch("https://eovra2f8jrehbdl.m.pipedream.net")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			addTime(data/60);
		})
		.catch((error) => {
			console.error(
				"There was a problem with the fetch operation:",
				error
			);
		});
}
window.onload = logJSONData;

function pad2(n) {
    return n < 10 ? '0' + n : n;
}

function show() {
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
	// const data = { count: count };
	// postJSON(data);
}

function addTime(m) {
	var current = count;
	count += m * 60;
	const data = { count: count };
	postJSON(data);
	current <= 0 ? timer() : show();
}

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
	const data = { count: count };
	postJSON(data);
	current <= 0 ? timer() : show();
});

async function postJSON(data) {
	try {
		const response = await fetch(
			"https://eodre3icw0att09.m.pipedream.net",
			{
				method: "POST", // or 'PUT'
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);

		const result = await response.json();
		console.log("Success:", result);
	} catch (error) {
		console.error("Error:", error);
	}
}

