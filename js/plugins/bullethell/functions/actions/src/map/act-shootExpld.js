module.exports = {
		
    name: 'Shoot Wall Explosion',
	id: 502,

    execute (index, _this, _BH) {
		AudioManager.playSe({name: 'Explosion4', pan: 0, pitch: 150, volume: 20});
		
		
		let direction = (Math.atan2(_this.direction.y,_this.direction.x) * 180 / Math.PI)+90;
		
		
		for (n=0;n<4;n++) {
			
			args = {};
			args.name = "";
			args.speed = 2+Math.random()*_this.speed;
			args.directioniscircle = "false";
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
					_this.opacity -= 5;
					_this.scale.x -= 0.01;
					_this.scale.y -= 0.01;
					_this.collision = [{}];
					
					if (_this.opacity <= 0) {

						_this.hp = 0;
					
					}
				
				};
			args.sprite = 'thanoscarbullet';
			args.width = 16;
			args.height = 16;
			args.posx = _this.pos.x;
			args.posy =_this.pos.y;
			args.direction = direction-180 + 70-Math.random()*55;
			_BH.createBHObject(args)
		}
		
		for (n=0;n<4;n++) {
			
			args = {};
			args.name = "";
			args.speed = 2+Math.random()*_this.speed;
			args.directioniscircle = "false";
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
					_this.opacity -= 5;
					_this.scale.x -= 0.01;
					_this.scale.y -= 0.01;
					_this.collision = [{}];
					
					if (_this.opacity <= 0) {

						_this.hp = 0;
					
					}
				
				};
			args.sprite = 'thanoscarbullet';
			args.width = 16;
			args.height = 16;
			args.posx = _this.pos.x;
			args.posy =_this.pos.y;
			args.direction = direction-180 + 290+Math.random()*55;
			_BH.createBHObject(args)
		}
    },
};