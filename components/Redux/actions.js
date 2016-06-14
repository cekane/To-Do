
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
	},

	toggleTask: function(id){
		return {
			type : 'TOGGLE_COMPLETED',
			id: id
		};
	}
};

module.exports = actions;