import ActionTypes from "../actions/action_type";

export default (state = {}, action = {}) => {

    switch (action.type) {

        case ActionTypes.AddTodo :
        {
            const newState = Object.assign({}, state);
            newState.todos = newState.todos || [];
            newState.todos.push(action.todo);
            return newState;
        }

        default :
        {
            return state;
        }
    }
}
