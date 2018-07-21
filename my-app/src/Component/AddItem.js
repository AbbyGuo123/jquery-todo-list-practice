import React, { Component } from 'react';

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state={id:props.id,value:props.value,className:props.className};
        this.checkBoxListen = props.checkBoxListen;
    }

    render(){
        return(
            <div>
                <li id={this.state.id} className={this.state.className} onDoubleClick={this.modifyValueByDoubleClick}>
                    <input name="done-todo" type="checkbox" className="done-todo" checked={this.state.className} onClick={this.checkCheckBox.bind(this)} />
                    {this.state.value} 
                </li>
             </div>
        )
    }

    checkCheckBox(event){
        this.state.className=event.target.checked?"checked":"";
        this.setState(this.state);
        console.log(this.state);
        console.log(event.target.parentNode.id);
        let id = event.target.parentNode.id;
        this.props.checkBoxListen(id);
    }
    
    modifyValueByDoubleClick(e){
        e.target.setAttribute("contentEditable",true);
        e.target.focus();
    }
}