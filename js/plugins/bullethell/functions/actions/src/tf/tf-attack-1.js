module.exports = {
		
    name: 'TF Attack 1',
	id: 701,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				_BH.swapSoul("blue");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				
			}
			
			_this.hp -= 1;
			
			if (_this.hp % 40 == 0 && _this.hp < _this.maxhp-200) {
			_BH.createTFBlaster(336-96/2 + _BH.bhmaxwidth/2, 406 + _BH.bhmaxheight/2, 20, 60, 0)
			_BH.createTFBlaster(1280-336-96/2 + _BH.bhmaxwidth/2, 406 + _BH.bhmaxheight/2, 20, 60, 180)
			}
			
			if (_this.hp % 80 == 0) {
			_BH.createTFPlatform(-32 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			_BH.createTFPlatform(-64 + _BH.bhmaxwidth/2, 338 + _BH.bhmaxheight/2, 3)
			/*this.createSmallPlatform(1280 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)
			this.createSmallPlatform(1280 +32 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)*/
			}
			
			
			if (_this.hp % 240 == 0) {
			
			_BH.createFedofTopHat(1280 - 494 + _BH.bhmaxwidth/2,20,60)
			
			}
			else if (_this.hp % 120 == 0) {
			_BH.createFedofTopHat(494 + _BH.bhmaxwidth/2,20,60)
			/*this.createSmallPlatform(1280 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)
			this.createSmallPlatform(1280 +32 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)*/
			}
    },
};