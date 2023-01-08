module.exports = {
		
    name: 'PPG Attack 5',
	id: 55,

    execute (index, _this, _BH) {
		
			if (_BH.playerHasMove) Math.random();

			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
			}
			
			
			if (_this.hp % 40 == 0) {
			_BH.createSmallPlatform(-32 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			_BH.createSmallPlatform(-64 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			_BH.createSmallPlatform(1280 + _BH.bhmaxwidth/2, 200 + _BH.bhmaxheight/2, 3)
			_BH.createSmallPlatform(1280+32 + _BH.bhmaxwidth/2, 200 + _BH.bhmaxheight/2, 3)
			}
			
			if (_this.hp % 60 == 0 && _this.hp < _this.maxhp-200) {
			let randomy = Math.floor(Math.random()*3);
			_BH.createGasterBlaster(1280-336-96/2 + _BH.bhmaxwidth/2, 406 + _BH.bhmaxheight/2-(138*randomy), 20, 60)
			_BH.createGasterBlaster(1280-336-96/2 + _BH.bhmaxwidth/2, 406-64 + _BH.bhmaxheight/2-(138*randomy), 20, 60)
			}

			
			_this.hp -= 1;
    },
};