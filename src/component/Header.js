import React, { Component } from 'react';
import '../App.css';
class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        )
    }
}
export default Header;