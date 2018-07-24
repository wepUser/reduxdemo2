/**
 * Created by admin on 2018-7-24.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action';

class AddList extends Component{
    constructor(props){
        super();
        this.addClick=this.addClick.bind(this);
    }

    addClick(){
        let text=this.inputRef.value;
        this.props.dispatch(addTodo(text));
    }


    render(){
        return(
            <div>
                <input type="text" ref={ref=>this.inputRef=ref}/>
                <button onClick={this.addClick}>ADD</button>
            </div>
        )
    }
}

// let mapDispatchToProps=(dispatch)=>{
//     console.log(dispatch);
//     return {
//         addDispatch:(text)=>dispatch(addTodo(text))
//     }
// };

export default connect()(AddList)