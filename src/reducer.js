/**
 * Created by admin on 2018-7-24.
 */
import {combineReducers} from 'redux';

function todoReducer(list=[],action) {
    switch (action.type){
        case 'ADD_TODO':
            return[
                ...list,
                {
                    id:action.id,
                    text:action.text,
                    complete:false
                }
            ];
        case 'TOGGLE_TODO':
            return list.map((item)=>{
                return item.id===action.id?
                    {...item,complete:!item.complete}
                    :item
            });
        default:
            return list
    }
}

function filterReducer(filter='SHOW_ALL',action) {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return filter
    }
}


  export const rootReducer=combineReducers({
    list:todoReducer,
    filter:filterReducer
});

