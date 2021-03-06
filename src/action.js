/**
 * Created by admin on 2018-7-24.
 */
let nextTodoId=0;

export function addTodo(text) {
    return {
        type:'ADD_TODO',
        id:nextTodoId++,
        text
    }
}

export function setVisibility(filter) {
    return{
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}

export function toggleTodo(id) {
    return{
        type:'TOGGLE_TODO',
        id
    }
}

export const visibilityFilters={
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_UN_COMPLETE:'SHOW_UN_COMPLETE'
};

