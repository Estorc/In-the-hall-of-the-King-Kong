//=============================================================================
// RPG Maker MZ - Feather Core
//=============================================================================

/*:
 * @target MZ
 * @plugindesc The core plugin for all Feather's plugins.
 * @author Feather
 *
 * @help 
 * The core plugin for all Feather's plugins.
 *
 */
 

(() => {
    const pluginName = "FeatherCore";

	Spriteset_Base.prototype.createPictures = function() {

	};


	Spriteset_Feather = function() {
		this.initialize(...arguments);
	}

	Spriteset_Feather.prototype = Object.create(Spriteset_Base.prototype);
	Spriteset_Feather.prototype.constructor = Spriteset_Feather;


	Spriteset_Feather.prototype.initialize = function() {
		Spriteset_Base.prototype.initialize.call(this);
		this.sprite = [];
		this.colmask = [];
		this.collision = [];
		
		const rect = this.pictureContainerRect();
		this._pictureContainer = new Sprite();
		this._pictureContainer.setFrame(rect.x, rect.y, rect.width, rect.height);
		for (let i = 1; i <= $gameScreen.maxPictures(); i++) {
			this._pictureContainer.addChild(new Sprite_Picture(i));
		}
	};



	Spriteset_Feather.prototype.pictureContainerRect = function() {
		return new Rectangle(0, 0, Graphics.width, Graphics.height);
	};

	Spriteset_Feather.prototype.createLowerLayer = function() {
		this._baseSprite = new Sprite();
		this.addChild(this._baseSprite);
		this.createBaseFilters();
	};

	Spriteset_Feather.prototype.update = function() {
		Spriteset_Base.prototype.update.call(this);
	};
		
	_Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset
	Scene_Battle.prototype.createSpriteset = function() {
		_Scene_Battle_createSpriteset.call(this)
		this._featherSpriteset = new Spriteset_Feather();
		this.addChild(this._featherSpriteset);
	};


	_Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset
	Scene_Map.prototype.createSpriteset = function() {
		_Scene_Map_createSpriteset.call(this)
		this._featherSpriteset = new Spriteset_Feather();
		this.addChild(this._featherSpriteset);
	};
	
})();
