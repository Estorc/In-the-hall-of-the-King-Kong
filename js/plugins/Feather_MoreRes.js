//==============================================================================
// More Resolutions
// by Feather
// Last Updated: 2016.02.15
//==============================================================================

/*:
 * @plugindesc More Resolutions
 * @author Feather
 * @target MZ
 *
 * @help
 * More Resolutions
 *
 */

(function() {
	const pluginName = "More Resolutions";


Sprite_Picture.prototype.updatePosition = function() {
    const picture = this.picture();
    this.x = Math.round(picture.x()) * ($dataSystem.advanced.screenWidth/1280);
    this.y = Math.round(picture.y()) * ($dataSystem.advanced.screenHeight/720);
};

Sprite_Picture.prototype.updateScale = function() {
    const picture = this.picture();
	if (!(picture.name() == "")) {
    this.scale.x = picture.scaleX() / 100 * ($dataSystem.advanced.screenWidth/1280);
    this.scale.y = picture.scaleY() / 100 * ($dataSystem.advanced.screenWidth/1280);
	}
};



})();