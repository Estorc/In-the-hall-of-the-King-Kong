module.exports = {
		
    name: 'PPG Attack 9',
	id: 59,

    execute (index, _this, _BH) {
				
			if (_BH.playerHasMove) Math.random();

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
			_BH.createSmallPlatform(-32 + _BH.bhmaxwidth/2, 348 + _BH.bhmaxheight/2, 3)
			_BH.createSmallPlatform(-64 + _BH.bhmaxwidth/2, 348 + _BH.bhmaxheight/2, 3)
			/*this.createSmallPlatform(1280 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)
			this.createSmallPlatform(1280 +32 + this.bhmaxwidth/2, 338 + this.bhmaxheight/2, 3)*/
			}
			
			if (_this.hp % 480 == 0) {
			
			_BH.createTopHatLetter(1280 - 452 - 376/2 - 32 + _BH.bhmaxwidth/2,20,60)
			
			}
			
			
			if (_this.hp % 120 == 0 && _this.hp < _this.maxhp-200) {
				AudioManager.playSe({name: 'Raise3', pan: 0, pitch: 150, volume: 80});
				
				args = {};
				args.name = "ForcedSpeed";
				args.speed = 0;
				args.directioniscircle = "false";
				args.hp = 4+Math.random()*3;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 40;
				args.sprite = 'ppg_explosivebulletWarning@10@3';
				args.width = 0;
				args.height = 0;
				args.posx = _BH.bhmaxwidth/2+452+Math.random()*376-32;
				args.posy = 0;
				args.offsety = 84+_BH.bhmaxheight/2;
				args.direction = 0;
				_BH.createBHObject(args)
			}
    },
};