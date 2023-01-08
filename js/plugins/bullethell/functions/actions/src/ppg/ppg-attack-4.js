module.exports = {
		
    name: 'PPG Attack 4',
	id: 54,

    execute (index, _this, _BH) {
		
			if (_BH.playerHasMove) Math.random();
		
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
			}

			
			_this.hp -= 1;
			
			if (_this.hp % 60 == 0) {
				
				AudioManager.playSe({name: 'Raise3', pan: 0, pitch: 150, volume: 100});
				
				_BH.createTopHatBunny(Math.random()*300 + _BH.bhmaxheight/2,Math.floor(Math.random()*2),20,60)
				
			}
			
			if (_this.hp % 480 == 0) {
			
			_BH.createTopHatLetter(1280 - 494 + _BH.bhmaxwidth/2,20,60)
			
			}
			else if (_this.hp % 240 == 0) {
				
			_BH.createTopHatLetter(494 + _BH.bhmaxwidth/2,20,60)
			
			}
    },
};