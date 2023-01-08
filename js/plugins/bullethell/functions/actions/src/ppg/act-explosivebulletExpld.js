module.exports = {
		
    name: 'Explosive Bullet Explosion',
	id: 39,

    execute (index, _this, _BH) {
		AudioManager.playSe({name: 'Explosion4', pan: 0, pitch: 150, volume: 100});
		$gameScreen.startShake(5, 5, 10);
		
		
		let direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI)+90;
		
		
		for (n=0;n<_this.explodePower;n++) {
			
			_BH.createGroundJumpingBullet(_this.pos.x,_this.pos.y,16,16,2+Math.random()*_this.speed,direction-180 + 70-Math.random()*55,'ppg_commonbullet');
		}
		
		for (n=0;n<_this.explodePower;n++) {
			
			_BH.createGroundJumpingBullet(_this.pos.x,_this.pos.y,16,16,2+Math.random()*_this.speed,direction-180 + 290+Math.random()*55,'ppg_commonbullet');
		}
    },
};