
var actions = {
	removeTask: function(){
		return {
			type: 'REMOVE_TASK'
		};
	},

	addTask: function(text){
		return {
			type: 'ADD_TASK',
			text: text
		};
	}
};

module.exports = actions;