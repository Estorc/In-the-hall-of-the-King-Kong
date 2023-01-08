(function() {
	
fs = require('fs')
   
const ddir = 'js/plugins/bullethell/functions/src';
const dfiles = fs.readdirSync(`${ddir}/`).filter(files => files.endsWith('.js'));






const actionDir = 'js/plugins/bullethell/functions/actions/src';
var BHactions = [];

fs.readdirSync(`${actionDir}/`).forEach(dirs => {
    const actions = fs.readdirSync(`${actionDir}/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of actions) {
        let action = require(`${actionDir}/${dirs}/${file}`);
        console.log(`-> Loaded action ${action.name}`);
		action.execute = action.execute.toString().substr(7, action.execute.toString().length);
		BHactions.push(action);
    };
});

loadActions =  `var BHactions = ${JSON.stringify(BHactions)};
for (const BHaction of BHactions) {
	eval('BHaction.execute = function '+BHaction.execute);
}`


const imagesDir = 'img/bhsprite';
let images = fs.readdirSync(`${imagesDir}/`).filter(files => files.endsWith('.png'));

loadImages =  'var images = '+JSON.stringify(images)+';'



	const sceneDir = 'js/plugins/bullethell/functions/scene';
	var BHscenes = {};

	const scenes = fs.readdirSync(`${sceneDir}`).filter(files => files.endsWith('.js'));

	for (const file of scenes) {
		let scene = require(`${sceneDir}/${file}`);
		console.log(`-> Loaded scene ${scene.name} (${file})`);
		scene.load = scene.load.toString().substr(4, scene.load.toString().length);
		BHscenes[scene.name] = scene;
	};

loadScenes =  `var BHscenes = ${JSON.stringify(BHscenes)};
for (const BHscene in BHscenes) {
	eval('BHscenes[BHscene].load = function '+BHscenes[BHscene].load);
}`






for (const file of dfiles) {
	fs.readFile(`${ddir}/${file}`, 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  var result = data;
	  result = result.replace(/<LoadActions>/g, loadActions);
	  result = result.replace(/<LoadImages>/g, loadImages);
	  result = result.replace(/<LoadScenes>/g, loadScenes);

	  fs.writeFile(`${ddir}/../${file}`, result, 'utf8', function (err) {
		 if (err) return console.log(err);
	  });
	});
};
   
   
})();

