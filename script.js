const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const lengthPass = document.getElementById("length");
const btn = document.getElementById("generate");
const results = document.getElementById("results");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

	// Doesn't have a selected type
	if (typesCount === 0) {
		return "";
	}

	// create a loop
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}

btn.addEventListener("click", () => {
	console.log("Hello");
	const length = lengthPass.value;
	const lower = lowerEl.checked;
	const upper = upperEl.checked;
	const number = numberEl.checked;
	const symbol = symbolEl.checked;
	const generatedPass = generatePassword(lower, upper, number, symbol, length);
	console.log(generatedPass);
	results.innerText = generatedPass;
});
