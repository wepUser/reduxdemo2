/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Lists from './Lists';
import {toggleTodo} from '../action';

function getVisibleList(filter,list) {
    switch (filter){
        case 'SHOW_COMPLETED':
            return list.filter(item=>{return item.complete});
        case 'SHOW_UN_COMPLETE':
            return list.filter(item=>{return !item.complete});
        case 'SHOW_ALL':
        default:
            return list
    }

}

let mapStateToProps=(state,ownProps)=>{
    return {
        list:getVisibleList(state.filter,state.list)
    }
};

let mapDispatchToProps=(dispatch)=>{
  return {
      toggleDispatch:id=>dispatch(toggleTodo(id))
  }
};



export default connect(mapStateToProps,mapDispatchToProps)(Lists)