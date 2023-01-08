//=============================================================================
// RPG Maker MZ - Map Pointers
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Displays map pointers around the player like a compass.
 * @author Feather
 *
 * @help 
 * This plugin provides a map pointers system like a compass to help and guide the player
 *
 */
 

(() => {
    const pluginName = "MapPointers";

	MapPointers = function() {
		this.initialize(...arguments);
	}
	
	MapPointers.prototype.initialize = function() {
		
	this.sprite = [];
	//this.pointers = [];
	};
	
	
	$gameMapPointers = new MapPointers();
	
	MapPointers.prototype.addSprite = function(i) {
						
				sprite = ImageManager.loadSystem("IconSet");
				let distance = Math.sqrt(Math.pow(i.y-$gamePlayer._realY,2) + Math.pow(i.x-$gamePlayer._realX,2));
				
					
					this.sprite[i] = new Sprite(sprite);
					this.sprite[i].type = 'pointer';
					this.sprite[i].anchor.x = 0.5;
					this.sprite[i].anchor.y = 0.5;
					this.sprite[i].angle = 0;
					this.sprite[i].blendMode = 0;
					this.sprite[i].x = Math.cos(Math.atan2(i.y-$gamePlayer._realY,i.x-$gamePlayer._realX))*96+$gamePlayer.screenX() << 0;
					this.sprite[i].y = Math.sin(Math.atan2(i.y-$gamePlayer._realY,i.x-$gamePlayer._realX))*96+$gamePlayer.screenY()-24 << 0;
					this.sprite[i].opacity = (i.opacity * Math.min((distance-5)/10,1));
					this.sprite[i].scale.y = 1;
					this.sprite[i].scale.x = 1;
					this.sprite[i].setFrame((i.icon%16)*32, (i.icon/16 << 0)*32, 32, 32);
					
				return this.sprite[i];
		
	}
	
	
	MapPointers.prototype.getPointers = function() {
				
				let pointers = [];
				if (!$gameMap) {return null};
				
				$gameMap.events().filter(event => event.event().meta.Pointer || event._eventIcon.iconIndex == 362 || event._eventIcon.iconIndex == 363).forEach(item => {
					if (item.event().meta.Pointer) {
						pointers.push(this.addSprite({x:item._x,y:item._y,icon:eval(item.event().meta.Pointer),opacity:255}));
					} else {
						pointers.push(this.addSprite({x:item._x,y:item._y,icon:item._eventIcon.iconIndex,opacity:255}));
					}
				});
				return pointers
		
	}
	
	_Spriteset_Feather_update = Spriteset_Feather.prototype.update;
	Spriteset_Feather.prototype.update = function() {
		_Spriteset_Feather_update.call(this);
		this.children = this.children.filter(object => object.type != 'pointer');
		if (ConfigManager['showCompass'] && SceneManager._scene.constructor != Scene_Battle) {
			$gameMapPointers.getPointers().forEach(item => {
				this.addChild(item);
			});
		}
	};
	
})();
