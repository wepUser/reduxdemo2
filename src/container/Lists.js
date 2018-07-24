/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';
import List from './List';

class Lists extends Component{
    constructor(props){
        super();
    }


    render(){
        let {list,toggleDispatch}={...this.props};
        return(
            <ul>
                {list.length>0?list.map((item,index)=>{
                    return <List key={index} text={item.text} onClick={()=>toggleDispatch(item.id)} complete={item.complete}/>
                }):null}
            </ul>
        )
    }
}

export default Lists