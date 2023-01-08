module.exports = {
		
    name: 'Big Bullet Explosion',
	id: 44,

    execute (index, _this, _BH) {
		let rng = new Math.seedrandom(_this.name)
		AudioManager.playSe({name: 'Ice2', pan: 0, pitch: 150, volume: 70});

		for (n=0;n<_this.explosionPower;n++) {
			args = {};
			args.name = "";
			args.posx = _this.pos.x+8;
			args.posy = _this.pos.y+8;
			args.width = 16;
			args.height = 16;
			args.speed = 7;
			args.direction = rng()*360;
			args.directioniscircle = "true";
			args.sprite = 'ppg_commonbullet';
			args.hp = 0;
			args.candie = "false";
			args.canbetouched = "false";
			args.action = 0;
			args.deathaction = 0;
			args.isPlayerShot = "false";
			args.isBonus = "false";
			_BH.createBHObject(args)
		}
    },
};