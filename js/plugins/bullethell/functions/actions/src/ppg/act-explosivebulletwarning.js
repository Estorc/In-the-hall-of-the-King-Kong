module.exports = {
		
    name: 'Explosive Bullet Warning',
	id: 40,

    execute (index, _this, _BH) {
		if (_this.frame >= 9 && _this.frametimer >= 2) {
			
				if (_this.name == "ForcedSpeed") {
					_BH.createExplosiveBullet(_this.pos.x+8,_this.hp,25);
				} else {
					_BH.createExplosiveBullet(_this.pos.x+8,5+Math.random()*10,25);
				}
				AudioManager.playSe({name: 'Fire1', pan: 0, pitch: 150, volume: 100});
				_this.hp = 0;
			
		}
    },
};