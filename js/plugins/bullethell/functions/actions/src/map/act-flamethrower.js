module.exports = {
		
    name: 'Flamethrower',
	id: 501,

    execute (index, _this, _BH) {
		
		_this.hp += 0.25;
		
		if (_this.hp > 100) _this.hp = 0;
		
		if (_this.hp%1 == 0) {
		args = {};
		args.name = "";
		args.speed = 6;
		args.directioniscircle = "true";
		args.hp = 1;
		args.candie = "true";
		args.canbetouched = "false";
		args.deathaction = 0;
		args.isPlayerShot = "false";
		args.isBonus = "false";
		args.cantbeinstakill = "false";
		args.action = function(index, _this, _BH) 
		{
		
			_this.speed *= 0.99;
			_this.opacity -= 1.5;
			_this.scale.x += 0.01;
			_this.scale.y += 0.01;
			if (_this.opacity <= 40) {

				_this.collision = [{}];
			
			}
			if (_this.opacity <= 0) {

				_this.hp = 0;
			
			}
		
		};
		args.sprite = 'flamethrower-fire';
		args.width = 128;
		args.height = 128;
		args.scalex = 0;
		args.scaley = 0;
		args.collision_scalex = 'scale';
		args.collision_scaley = 'scale';
		args.posx = _this.pos.x-64;
		args.posy = _this.pos.y-64;
		args.collision = [{'type':'circle','x':args.width/2,'y':args.height/2,'radius': args.height/2}];
		args.angle = (_this.hp/100)*359-90;
		args.direction = (_this.hp/100)*359-90;
		_BH.createBHObject(args)
		args.angle = (_this.hp/100)*359-90+180;
		args.direction = (_this.hp/100)*359-90+180;
		_BH.createBHObject(args)
		
		}
		
		
    },
};