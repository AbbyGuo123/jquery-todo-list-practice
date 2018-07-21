import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './todo.css'
import AddItem from './Component/AddItem';

class App extends Component {
  constructor(propos){
    super(propos);
    this.state={itemList:[],filterlistByStatus:[],status:"all"};
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input className="input-text" type="text" name="ListItem"/>
            <div id="button" onClick={this.AddItemFun.bind(this)}>Add</div>
        </div>
        <br/>
        <form id="todoForm">
            {this.generateItemList()}
        </form>
        <div>
            <ul id="filters">
            <li>
                    <a href="#" data-filter="all" className="selected" onClick={this.clickStatus.bind(this,"all")}>ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" className="" onClick={this.clickStatus.bind(this,"checked")}>Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" className="" onClick={this.clickStatus.bind(this,"")}>Complete</a>
                </li>
            </ul>

        </div>
        </div>
        

      </div>
    );
  }
  AddItemFun=(event)=>{
      let newItemList = [...this.state.itemList];
      let id1 = this.generateUUID();
      newItemList.push({id :id1, value:event.target.parentNode.children[0].value, className:"", checkBoxListen:this.checkBoxListen});
      console.log(newItemList);
      this.state.itemList = newItemList;
      this.state.filterlistByStatus = newItemList;
      this.setState(this.state);
      console.log(this.state.itemList);
      event.target.parentNode.children[0].value = "";
  }

  generateItemList=()=>{
      let arr = [...this.state.filterlistByStatus];
      let list = [];
      console.log(this.state.filterlistByStatus);
      console.log(arr);
      for(let i=0;i<arr.length;i++){
          list.push(<AddItem id ={arr[i].id} value={arr[i].value} className={arr[i].className} checkBoxListen={this.checkBoxListen} />)
      }
      return list;
  }

  generateUUID=()=>{
    /*jshint bitwise:false */
    var i,
        random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        uuid += (i === 12
            ? 4
            : (i === 16
                ? (random & 3 | 8)
                : random)).toString(16);
    }
    return uuid;
}

clickStatus=(status)=>{
  if(status=="all"){
    this.state.filterlistByStatus = this.state.itemList;
  }
  else{
      let showList = [];
      for(let item of this.state.itemList){
          if(item.className===status){
            showList.push(item);
          }
      }
    this.state.filterlistByStatus = showList;
  }
  this.state.status = status;
  this.setState(this.state);
}

checkBoxListen=(id)=>{
      let arr = [...this.state.itemList];
      console.log(this.state.itemList);
    console.log("aaaaaa");
    console.log(arr);
    for(let i=0;i<arr.length;i++){
        if(arr[i].id===id){
            // console.log(arr[i]);
            if( arr[i].className==="")
                arr[i].className ='checked';
            else
                arr[i].className = '';
        }

      }
      console.log(arr);
      this.state.itemList = arr;
      this.setState(this.state);

}


}



export default App;
