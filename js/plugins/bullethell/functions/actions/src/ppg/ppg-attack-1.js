module.exports = {
		
    name: 'PPG Attack 1',
	id: 51,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
			}
			
			_this.hp -= 1;
			
			if (_this.hp % 40 == 0 && _this.hp < _this.maxhp-200) {
			_BH.createGasterBlaster(336-96/2 + _BH.bhmaxwidth/2, 406 + _BH.bhmaxheight/2, 20, 60)
			_BH.createGasterBlaster(1280-336-96/2 + _BH.bhmaxwidth/2, 406 + _BH.bhmaxheight/2, 20, 60)
			}
			
			if (_this.hp % 80 == 0) {
			_BH.createSmallPlatform(-32 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			_BH.createSmallPlatform(-64 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			/*this.createSmallPlatform(1280 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)
			this.createSmallPlatform(1280 +32 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)*/
			}
			
			
			if (_this.hp % 240 == 0) {
			
			_BH.createTopHatLetter(1280 - 494 + _BH.bhmaxwidth/2,20,60)
			
			}
			else if (_this.hp % 120 == 0) {
			_BH.createTopHatLetter(494 + _BH.bhmaxwidth/2,20,60)
			/*this.createSmallPlatform(1280 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)
			this.createSmallPlatform(1280 +32 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)*/
			}
    },
};