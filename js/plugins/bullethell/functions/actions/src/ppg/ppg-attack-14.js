module.exports = {
		
    name: 'PPG Attack 14',
	id: 64,

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

				
			}
			
			
			if (_this.hp % 120 == 0) {
				
				args = {};
				args.name = "PPG_BigExpld" + _this.hp.toString();
				Math.seedrandom(_this.hp.toString())
				if (Math.random() < 0.25) {
					args.posx = _BH.bhmaxwidth/2-32;
					args.posy = _BH.bhmaxheight/2+Math.random()*720;
				} else if (Math.random() < 0.5) {
					args.posx = _BH.bhmaxwidth/2+Math.random()*1280;
					args.posy = _BH.bhmaxheight/2-32;
				} else if (Math.random() < 0.75) {
					args.posx = _BH.bhmaxwidth/2+1280;
					args.posy = _BH.bhmaxheight/2+Math.random()*720;
				} else {
					args.posx = _BH.bhmaxwidth/2+Math.random()*1280;
					args.posy = _BH.bhmaxheight/2+720;
				}
				args.width = 16;
				args.height = 16;
				args.speed = 1.5;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'ppg_bigbullet';
				args.hp = 10;
				args.candie = "true";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 45;
				args.deathaction = 44;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				
				_BH.createBHObject(args)

			}
			
			if (_this.hp % 400 == 0) {
				
				args = {};
				args.name = "";
				if (Math.random() < 0.25) {
					args.posx = _BH.bhmaxwidth/2-32;
					args.posy = _BH.bhmaxheight/2+Math.random()*720;
				} else if (Math.random() < 0.5) {
					args.posx = _BH.bhmaxwidth/2+Math.random()*1280;
					args.posy = _BH.bhmaxheight/2-32;
				} else if (Math.random() < 0.75) {
					args.posx = _BH.bhmaxwidth/2+1280;
					args.posy = _BH.bhmaxheight/2+Math.random()*720;
				} else {
					args.posx = _BH.bhmaxwidth/2+Math.random()*1280;
					args.posy = _BH.bhmaxheight/2+720;
				}
				args.width = 16;
				args.height = 16;
				args.speed = 1.5;
				args.direction = 0;
				args.directioniscircle = "false";
				args.sprite = 'ppg_bigbullet';
				args.hp = 25;
				args.candie = "true";
				args.canbetouched = "false";
				args.cantbeinstakill = "true";
				args.action = 45;
				args.deathaction = 44;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				
				_BH.createBHObject(args)

			}
			
			
			if (_this.hp % 6 == 0) {
				
				args = {};
				args.name = "";
				args.posx = _BH.bhmaxwidth/2-16;
				args.posy = _BH.bhmaxheight/2+Math.random()*720;
				args.width = 16;
				args.height = 16;
				args.speed = 1.5;
				args.direction = 90;
				args.directioniscircle = "false";
				args.sprite = 'ppg_commonbullet';
				args.hp = 0;
				args.candie = "false";
				args.canbetouched = "false";
				args.action = 0;
				args.deathaction = 0;
				args.isPlayerShot = "false";
				args.isBonus = "false";
				
				_BH.createBHObject(args)
				
				args.posx = _BH.bhmaxwidth/2+Math.random()*1280;
				args.posy = _BH.bhmaxheight/2-16;
				args.direction = 180;
				
				_BH.createBHObject(args)
				
			}
			
			_this.hp -= 1;
    },
};