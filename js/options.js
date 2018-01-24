const gameModeSelect = document.querySelector('.options--gameMode');
const fpsSelect = document.querySelector('.options--fps');
const fpsText = document.querySelector('.fpsText');
const gSpeed = document.querySelector('.options--gSpeed');
gameModeSelect.innerHTML = game.modes.map(mode =>{
	return `<option>${mode}</option>`;
});

fpsSelect.addEventListener('change', function(){
	fpsText.innerText = this.value;
	game.gameFps = parseInt(this.value);
});

gameModeSelect.addEventListener('change', function(){
	game.activeMode = this.value;
});

gSpeed.addEventListener('change', function(){
	let curValue = Number(this.value);
		console.log(typeof curValue);
		if(curValue > parseInt(this.max)){
			curValue = parseInt(this.max);
			this.value = curValue;
		}
		else if(curValue < parseInt(this.min)){
			curValue = parseInt(this.min);
			this.value = curValue;
		}
		game.gameSpeed = Number(curValue);
})