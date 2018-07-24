/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Link from './Link';
import {setVisibility} from '../action';


let mapStateToProps=(state,ownProps)=>{
    return{
        active:state.filter===ownProps.filter
    }
};

let mapDispatchToProps=(dispatch,ownProps)=>{
  return {
      filterDispatch:filter=>dispatch(setVisibility(filter))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Link)