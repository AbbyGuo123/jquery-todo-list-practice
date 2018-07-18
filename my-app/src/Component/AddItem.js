import React, { Component } from 'react';

export default class AddItem extends Component{
    constructor(propos){
        super(propos);
        this.state={id:propos.id,value:propos.value,class:propos.class};
    }

    render(){
        return(
            <div>
                <li id={this.state.id} className={this.state.class}>
                    <input name="done-todo" type="checkbox" className="done-todo" checked={this.state.class}/>
                    {this.state.value} 
                </li>
             </div>
        )
    }
}