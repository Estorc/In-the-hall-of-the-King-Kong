module.exports = {
		
    name: 'PPG Attack 11',
	id: 61,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {

				$gameVariables.setValue(83,640-36/2)
				$gameVariables.setValue(84,500)
				_BH.swapSoul("yellow");
				_this.maxhp = _this.hp;
				_this.begin = 0;
				_BH.PlayerCollisionX1 = 17;
				_BH.PlayerCollisionX2 = 19;
				_BH.PlayerCollisionY1 = 42;
				_BH.PlayerCollisionY2 = 44;
				_this.hammer = [];
				
			}
			
			
			if (_this.hp == _this.maxhp-100) {
				
				_this.hammer[0] = _BH.createGiantHammer(1.5,_this.maxhp,120,272,270,20)
				_this.hammer[1] = _BH.createGiantHammer(-1.5,_this.maxhp,1280-120,272,90,21)
				
			}


			if (typeof _this.hammer[0] !== 'undefined' && typeof _this.hammer[0].angle !== 'undefined' &&(
			_this.hammer[0].angle - Math.floor(_this.hammer[0].angle/360)*360 == 270+45 || 
				 _this.hammer[1].angle - Math.floor(_this.hammer[1].angle/360)*360 == 270-45 )) {
				
				AudioManager.playSe({name: 'Wind1', pan: 0, pitch: 50, volume: 70});
				
			}

			
			_this.hp -= 1;
			
			if (_this.hp % 4 == 0) {
				let percent = (_this.maxhp-_this.hp)*6;
				while (percent > 100) {
					
					percent -= 100;
					
				}
				
				_BH.createInvertVortex(640,272,1.5,'ppg_commonbullet',percent);
			}
			
			if (_this.hp % 4 == 0) {
				let percent = (_this.maxhp-_this.hp)*6;
				while (percent > 100) {
					
					percent -= 100;
					
				}
				
				_BH.createInvertVortex(640,272,1.5,'ppg_commonbullet',-percent);
			}
    },
};