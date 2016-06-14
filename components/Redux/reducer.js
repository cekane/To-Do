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
		case 'TOGGLE_ALL_COMPLETED':
			return Object.assign({}, state, {
				completed: action.value
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
			var nTodos = state.todos.filter(t=>t.completed===false)
			console.log("AFTER DELETE", nTodos)
			return Object.assign(
				{},
				state,
				{
					todos: nTodos
				})
		case 'TOGGLE_COMPLETED':
			var nTodos =state.todos.map( t=> 
				todo(t,action)
				)
			return Object.assign(
			{},
			state,
			{
				todos: nTodos
			});
		case 'TOGGLE_ALL_COMPLETED':
			var nTodos =state.todos.map( t=> 
				todo(t,action)
				)
			console.log(action.value)
			return Object.assign(
			{},
			state,
			{
				todos: nTodos
			});
		default:
			return state;
	}
};

export default todos