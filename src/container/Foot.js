/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';
import FilterLink from './FooterLink';
import {visibilityFilters} from '../action';

class Foot extends Component{
    constructor(){
        super()
    }

    render(){
        return(
           <div>
               <FilterLink filter={visibilityFilters.SHOW_ALL}>SHOW_ALL</FilterLink>
               <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>SHOW_COMPLETED</FilterLink>
               <FilterLink filter={visibilityFilters.SHOW_UN_COMPLETE}>SHOW_UN_COMPLETE</FilterLink>
           </div>
        )
    }
}

export default Foot