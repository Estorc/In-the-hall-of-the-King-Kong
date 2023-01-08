module.exports = {
		
    name: 'FKK Attack 1',
	id: 4251,

    execute (index, _this, _BH) {
			if(typeof _this.begin === 'undefined') {
				
				_this.begin = true;
				
			}
			
			
			if (_this.hp % 80 == 0) {
				
				args = {};
				args.name = "";
				args.speed = 0;
				args.opacity = 0;
				args.directioniscircle = "false";
				args.hp = 20;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 'KK_Hand1';
				args.sprite = 'KK-HAND1';
				args.width = 0;
				args.height = 0;
				args.posx = 0;
				args.posy = 450-50;
				args.damage = 1.5;
				args.direction = 90;
				args.collision = [{type:'rect',x1:69,x2:226,y1:14,y2:117},{type:'rect',x1:195,x2:94,y1:195,y2:30},{type:'rect',x1:185,x2:68,y1:81,y2:122}];
				_BH.createBHObject(args)
				
			}
			
			if (_this.hp % 80 == 40) {
				
				args = {};
				args.name = "";
				args.speed = 0;
				args.opacity = 0;
				args.directioniscircle = "false";
				args.hp = 20;
				args.candie = "true";
				args.canbetouched = "false";
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				args.cantbeinstakill = "true";
				args.action = 'KK_Hand1';
				args.sprite = 'KK-HAND1';
				args.scalex = -1;
				args.width = 0;
				args.height = 0;
				args.posx = 1280+_BH.bhmaxheight-365;
				args.posy = 450 + 150;
				args.damage = 1.5;
				args.direction = -90;
				args.collision = [{type:'rect',x1:365-69-226,x2:226,y1:14,y2:117},{type:'rect',x1:365-195-94,x2:94,y1:195,y2:30},{type:'rect',x1:365-185-68,x2:68,y1:81,y2:122}];
				_BH.createBHObject(args)
				
			}
			
			
			
			
			_this.hp -= 1;
    },
};