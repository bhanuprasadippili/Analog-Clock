
setInterval(clock, 1000);
function clock() {
	time = new Date();
	hr = time.getHours();
	min = time.getMinutes();
	sec = time.getSeconds();

	sec_rotation = (sec/60)*360;
	min_rotation = (min/60)*360 + (sec/60)*6;
	hr_rotation = (hr/12)*360 + (min/60)*30;
	
	

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}
