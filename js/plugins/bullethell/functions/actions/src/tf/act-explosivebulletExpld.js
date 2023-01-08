module.exports = {
		
    name: 'Explosive Bullet Explosion',
	id: 808,

    execute (index, _this, _BH) {
		AudioManager.playSe({name: 'Explosion4', pan: 0, pitch: 150, volume: 100});
		$gameScreen.startShake(5, 5, 10);
		
			args = {};
			args.name = "";
			args.speed = 0;
			args.directioniscircle = "false";
			args.hp = 29;
			args.candie = "true";
			args.canbetouched = "false";
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			args.cantbeinstakill = "true";
			args.action = 90;
			args.sprite = 'Explosion@29@1';
			args.width = 0;
			args.height = 0;
			args.offsety = -75+8;
			args.offsetx = -45+8;
			args.posx = _this.pos.x;
			args.posy = _this.pos.y;
			args.direction = 0;
			args.zindex = 0.5;
			args.collision = [{}];
			_BH.createBHObject(args)
			
			args = {};
			args.name = "";
			args.speed = 0;
			args.directioniscircle = "false";
			args.hp = 2;
			args.candie = "true";
			args.canbetouched = "false";
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			args.cantbeinstakill = "false";
			args.action = 1;
			args.sprite = 'MafiaBulletFlash';
			args.width = 0;
			args.height = 0;
			args.offsety = -64+24;
			args.offsetx = -64+24;
			args.posx = _this.pos.x;
			args.posy = _this.pos.y;
			args.collision = [{}];
			args.zindex = 15;
			_BH.createBHObject(args)
		
		
		let direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI)+90;
		
		
		for (n=0;n<_this.explodePower;n++) {
			
			_BH.createGroundJumpingBullet(_this.pos.x,_this.pos.y,16,16,2+Math.random()*_this.speed,direction-180 + 70-Math.random()*55,'tf_commonbullet');
		}
		
		for (n=0;n<_this.explodePower;n++) {
			
			_BH.createGroundJumpingBullet(_this.pos.x,_this.pos.y,16,16,2+Math.random()*_this.speed,direction-180 + 290+Math.random()*55,'tf_commonbullet');
		}
    },
};