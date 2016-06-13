export default function(state = {todos: []}, action){

	switch (action.type){
		case 'ADD_TASK':
			return Object.assign(
			{},
			state,
			{todos: [{completed: false, text: action.text}, ...state.todos]});
		case 'REMOVE_TASK':
			return;
		default:
			return state;
	}
};