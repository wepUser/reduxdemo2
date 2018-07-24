/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';

class Link extends Component{
    constructor(props){
        super();
    }

    render(){
        let {active,filterDispatch,children,filter}={...this.props};
        return(
            <button onClick={()=>filterDispatch(filter)} disabled={active}>
                {children}
            </button>
        )
    }
}

export default Link