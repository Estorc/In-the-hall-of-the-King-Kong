/*:
 * @plugindesc A plugin that exports the stats of each class into a csv file.
 * @author LadyBaskerville
 *
 * @help
 * How to use:
 * Create a folder named "export" in your game project's base directory.
 * Start the game via the Playtest function in the editor.
 * Once the game has booted up, there will be a csv file for each class 
 * in the export folder.
 *
 * Terms of use:
 * Free to use in any RMMV project.
 * Edits and redistribution allowed.
 * No credit required.
 *
 */

(function() {
	
var _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
	if (_DataManager_isDatabaseLoaded.call(this)) {
		StorageManager.exportClassData();
		return true;
	} else {
		return false;
	}
};

StorageManager.exportClassData = function() {
    var fs = require('fs');
	var path = require('path');
	var base = path.dirname(process.mainModule.filename);
    var dirPath = path.join(base, 'export/');
	var cl = $dataClasses;
	for (var i = 1; i < cl.length; i++) {
		var data = '';
		//Header line
		data = data + cl[i].name;
		for (var j = 1; j < 100; j++) {
			data = data + ', LV ' + j;
		}
		//Stats
		for (var j = 0; j < cl[i].params.length; j++) {
			data = data + '\n' + $dataSystem.terms.params[j];
			for (var k = 1; k < 100; k++) {
				data = data + ', ' + cl[i].params[j][k];
			}
		}
		
		name = 'class%1.csv'.format(i);
		fs.writeFileSync(dirPath + name, data);
	}
};

})();