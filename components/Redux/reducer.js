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
		case 'FILTER_TO_DO':
			if(state.completed === false){
				return Object.assign({}, state, {
					visable: true
				})
			}
			return Object.assign({}, state, {
				visable: false
			})
		case 'FILTER_FINISHED':
			if(state.completed === true){
				return Object.assign({}, state, {
					visable: true
				})
			}
			return Object.assign({}, state, {
				visable: false
			})
		case 'FILTER_ALL':
			return Object.assign({}, state, {
				visable: true
			})
		default:
			return state;
	}
};

const todos = (state = {todos: []}, action)=> {
	console.log("action in reducer", action.type)
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
							text: action.text,
							visable: true
						}, 
						...state.todos
						]
			}
		);
		case 'REMOVE_TASK':
			var nTodos = state.todos.filter(t=>t.completed===false)
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
		case 'FILTER_TO_DO':
			var nTodos = state.todos.map(t=>
				todo(t,action))
			console.log(nTodos)
			return Object.assign(
				{},
				state,
				{
					todos: nTodos
				})
		case 'FILTER_FINISHED':
			var nTodos = state.todos.map(t=>
				todo(t,action))
			console.log(nTodos)
			return Object.assign(
				{},
				state,
				{
					todos: nTodos
				})
		case 'FILTER_ALL':
			var nTodos = state.todos.map(t=>
				todo(t,action))
			console.log(nTodos)
			return Object.assign(
				{},
				state,
				{
					todos: nTodos
				})
		default:
			return state;
	}
};

export default todos