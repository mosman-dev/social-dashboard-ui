const body = document.querySelector('body');
const backdrop = document.querySelector('.backdrop');
const modeSwitch = document.querySelector('.light-toggle');
const switchCircle = document.querySelector('.switch-circle');
const igBG = document.querySelector('.light-ig-bg');

const lightCardBG = document.querySelectorAll('.light-card-bg');
const lightTextBlue = document.querySelectorAll('.light-text-blue');

// Switch Slide Animation

const flipSwitch = (px) => {
	switchCircle.style.left = px + 'px';
};

// Toggle Light/Dark Theme

const switchTheme = () => {
	body.classList.toggle('dark-bg');
	body.classList.toggle('dark-text-white');
	backdrop.classList.toggle('dark-top-bg');
	modeSwitch.classList.toggle('dark-toggle');
	igBG.classList.toggle('dark-ig-bg');

	lightCardBG.forEach((el) => el.classList.toggle('dark-card-bg'));
	lightTextBlue.forEach((el) => el.classList.toggle('dark-text-blue'));

	body.classList.contains('dark-bg') ? flipSwitch(25) : flipSwitch(0);
};

modeSwitch.addEventListener('click', switchTheme);

// Number Counter

const numDivs = document.querySelectorAll('.num');
const numValues = [1987, 1044, 8239, 87, 52, 5462, 117, 507, 107, 1407];

const thousandDivs = document.querySelectorAll('.num-k');
const thousandValues = [32, 52];

const runInterval = (div, size, upperLimit, time, thousand) => {
	let counter;

	// For better syncing of counters
	size === 'large' ? (counter = upperLimit - 500) : (counter = 0);

	// Separating both intervals -- first one is to append the 'k' and second is for the numbers without the 'k'.
	if (thousand) {
		const thousandInterval = setInterval(() => {
			counter < upperLimit
				? (counter++, (div.innerText = counter + 'k'))
				: clearInterval(thousandInterval);
		}, time);
	} else {
		const interval = setInterval(() => {
			counter < upperLimit
				? (counter++, (div.innerText = counter))
				: clearInterval(interval);
		}, time);
	}
};

numDivs.forEach((div, i) =>
	numValues[i] > 500
		? runInterval(div, 'large', numValues[i], 1)
		: runInterval(div, 'small', numValues[i], 15)
);

thousandDivs.forEach((div, i) =>
	runInterval(div, 'small', thousandValues[i], 35, 1)
);
