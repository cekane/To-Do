const todo = (state, action)=> {
	var uuid = require('node-uuid');
	switch (action.type){
		case 'TOGGLE_COMPLETED':
			if(state.id !== action.id){
				return state
			}

			return Object.assign({}, state, {
				completed: !state.completed
			})
		default:
			return state;
	}
};

const todos = (state = {todos: []}, action)=> {
	var uuid = require('node-uuid');
	switch (action.type){
		case 'ADD_TASK':
			return Object.assign(
			{},
			state,
			{
				todos: [
						{
							id: uuid.v4(),
							completed: false, 
							text: action.text
						}, 
						...state.todos
						]
			}
		);
		case 'REMOVE_TASK':
			return;
		case 'TOGGLE_COMPLETED':
			console.log("before filter", state)
			var test =state.todos.map( t=> 
				todo(t,action)
				)
			console.log("After filter", test)
			return Object.assign(
			{},
			state,
			{
				todos: test
			});
		default:
			return state;
	}
};

export default todos