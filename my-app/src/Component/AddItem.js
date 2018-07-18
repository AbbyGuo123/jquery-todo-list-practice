import React, { Component } from 'react';

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={id:props.id,value:props.value,class:props.class};
    }

    render(){
        console.log(this.state.id);
        return(
            <div>
                <li id={this.state.id} className={this.state.class}>
                    <input name="done-todo" type="checkbox" className="done-todo" checked={this.state.class} onClick={this.checkCheckBox.bind(this)}/>
                    {this.state.value} 
                </li>
             </div>
        )
    }

    checkCheckBox(event){
        this.state.class=event.target.checked?"checked":"";
        console.log(event.target.checked);
        this.setState(this.state);

    }
}