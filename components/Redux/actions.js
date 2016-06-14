
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
	},

	filterToDo: function(){
		return{
			type : 'FILTER_TO_DO'
		}
	},

	filterFinished: function(){
		return{
			type : 'FILTER_FINISHED'
		}
	},

	filterAll: function(){
		return{
			type : 'FILTER_ALL'
		}
	}
};

module.exports = actions;