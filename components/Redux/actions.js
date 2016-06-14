
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
	},

	toggleAllTasks: function(val){
		return{
			type : 'TOGGLE_ALL_COMPLETED',
			value : val
		}
	}
};

module.exports = actions;