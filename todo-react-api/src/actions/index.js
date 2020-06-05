import {FETCH_TODOS} from '../actions/actionType';
import callApi from '../api/callApi';

export const actFetchTodosRequest = () => {
    return dispatch => {
        return callApi('todolist', 'GET', null).then(res => {
            dispatch(actFetchTodos(res.data));            
        });
    };
}

export const actFetchTodos = (todos) => {
    return {
        type : FETCH_TODOS,
        todos
    }
}