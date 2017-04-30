import ActionTypes from "./action_type";
import database from "../database/firebaseDb";

const getTodos = () => {
    return dispatch => {
        database.ref("/todos").once('value', snapshot => {

            snapshot.forEach((childSnapshot) => {
                let key = childSnapshot.key;
                let val = childSnapshot.val();

                let todo = {
                    id: key,
                    title: val.newTodo.title,
                    description: val.newTodo.description
                };
                dispatch(addTodoAction(todo));
            });
        }).catch((e) => {
            console.log(e);
        });
    }
};

const addTodo = (newTodo) => {
    console.log("Adding todo ... ", newTodo);
    return dispatch => {
        const todoRef = database.ref("/todos");
        todoRef.push({
            newTodo
        }).then((ref)=> {
            newTodo.id = ref.key;
            dispatch(addTodoAction(newTodo));
        }).catch((e)=> {
            console.log(e);
        });
    }
};

const addTodoAction = (todo) => {
    return {
        type: ActionTypes.AddTodo,
        todo: todo
    }
};

export default {getTodos, addTodo};



