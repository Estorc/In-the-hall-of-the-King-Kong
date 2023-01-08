module.exports = {
		
    name: 'Boss Death',
	id: 12,

    execute (index, _this, _BH) {
		$gameVariables.setValue(96,0);
		_this.candie = false;
    },
};