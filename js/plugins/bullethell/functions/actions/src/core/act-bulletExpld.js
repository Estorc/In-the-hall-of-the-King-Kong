module.exports = {
		
    name: 'Thanos Car Bullet Explosion',
	id: 2,

    execute (index, _this, _BH) {
		for (n=0;n<30;n++) {
			args = {};
			args.name = "";
			args.posx = _this.pos.x;
			args.posy = _this.pos.y;
			args.width = 16;
			args.height = 16;
			args.speed = 7;
			args.direction = _BH.getRandomInt(360);
			args.directioniscircle = "true";
			args.sprite = 'thanoscarbullet';
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