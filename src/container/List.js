/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';

class List extends Component{
    constructor(props){
        super();
    }

    render(){
        let {text,onClick,complete}={...this.props};
        return(
            <li onClick={onClick} style={{textDecoration:complete?'line-through':'none'}}>
                {text}
            </li>
        )
    }
}

export default List