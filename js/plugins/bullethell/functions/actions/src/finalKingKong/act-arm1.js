module.exports = {
		
    name: 'KK_Arm1',
	id: 1102,

    execute (index, _this, _BH) {
		if(typeof _this.begin === 'undefined') {

			_this.begin = 0;
			_this.timer = 0;
			_this.originx = _this.pos.x;
			_this.originy = _this.pos.y;
			
		}
		
		_this.timer += 0.1;
		_this.scale.x = Math.sin(_this.timer)/16+1.0625
		_this.scale.y = Math.sin(_this.timer)/16+1.0625
		
		if (_BH.objects[0].hp < 750) {
		
			if (_BH.objects[0].hp % 5 == 0 && _BH.objects[0].hp % 50 < 35) {
				
				AudioManager.playSe({name: 'Attack2', pan: 0, pitch: 200, volume: 40});
			
					args = {};
					args.name = "";
					args.width = 16;
					args.height = 16;
					args.speed = 5;
					args.direction = 180;
					args.directioniscircle = "false";
					args.sprite = 'thanoscarbullet';
					args.hp = 0;
					args.scalex = 0.5;
					args.scaley = 0.5;
					args.damage = 0.75;
					args.collision_scalex = 'scale'
					args.collision_scaley = 'scale'
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					
					for (let i = 0; i<8; i++) {
					
						switch (i) {
							
						case 0:
							args.posx = _this.pos.x + 640 + -315*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 97*_this.scale.y -8;
							break;
							
						case 1:
							args.posx = _this.pos.x + 640 + -266*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 2:
							args.posx = _this.pos.x + 640 + -176*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 237*_this.scale.y -8
							break;
							
						case 3:
							args.posx = _this.pos.x + 640 + -86*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 4:
							args.posx = _this.pos.x + 640 + 86*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 5:
							args.posx = _this.pos.x + 640 + 176*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 237*_this.scale.y -8
							break;
							
						case 6:
							args.posx = _this.pos.x + 640 + 266*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 7:
							args.posx = _this.pos.x + 640 + 315*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 97*_this.scale.y -8
							break;
						}
						_BH.createBHObject(args)
					
					}
					
			}
			
		} else {
		
			if (_BH.objects[0].hp % 150 == 0) {
				
				AudioManager.playSe({name: 'Attack2', pan: 0, pitch: 150, volume: 80});
			
					args = {};
					args.name = "";
					args.width = 16;
					args.height = 16;
					args.speed = 10;
					args.directioniscircle = "true";
					args.sprite = 'thanoscarbullet';
					args.hp = 0;
					args.scalex = 1;
					args.scaley = 1;
					args.damage = 0.5;
					args.collision_scalex = 'scale'
					args.collision_scaley = 'scale'
					args.candie = "false";
					args.canbetouched = "false";
					args.action = 0;
					args.deathaction = 0;
					args.isPlayerShot = "false";
					args.isBonus = "false";
					
					for (let i = 0; i<8; i++) {
					
						switch (i) {
							
						case 0:
							args.posx = _this.pos.x + 640 + -315*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 97*_this.scale.y -8;
							break;
							
						case 1:
							args.posx = _this.pos.x + 640 + -266*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 2:
							args.posx = _this.pos.x + 640 + -176*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 237*_this.scale.y -8
							break;
							
						case 3:
							args.posx = _this.pos.x + 640 + -86*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 4:
							args.posx = _this.pos.x + 640 + 86*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 5:
							args.posx = _this.pos.x + 640 + 176*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 237*_this.scale.y -8
							break;
							
						case 6:
							args.posx = _this.pos.x + 640 + 266*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 167*_this.scale.y -8;
							break;
							
						case 7:
							args.posx = _this.pos.x + 640 + 315*_this.scale.x -8;
							args.posy = _this.pos.y + 114 + 97*_this.scale.y -8
							break;
						}
						args.direction = _BH.getDirectionToPosition(args.posx+8,args.posy+8,$gameVariables.value(83)+18+_BH.bhmaxwidth/2,$gameVariables.value(84)+43+_BH.bhmaxheight/2);
						_BH.createBHObject(args)
					
					}
					
			}
			
		}
		
		
	},
};