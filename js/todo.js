
$(document)
    .ready(function () {
        generateUUID();
        // code to be implemented
    });


function generateUUID() {
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

const list = [{id:"c57aab79-7dfa-4d85-8ede-aa653a8b5d93",value:"Parking Lot APP Refactor",class:""},
            {id:"00bd6227-e881-4024-ad7a-4212d930c947",value:"Parking Lot APP 时序图",class:"checked"},
            {id:"8a134a9d-1df9-475a-ba5c-e27f9f003a99",value:"Parking Lot APP 中类的流程图",class:""},
            {id:"af51c0e0-97a4-4e78-9a31-48763fd6c089",value:"总结Java和面向对象相关的概念和知识",class:"checked"},
            {id:"cda424c4-7f16-4841-886a-0de60a395d34",value:"总结Parking Lot APP开发过程中的问题和经验",class:""}];

let showType='all';

function addItem(){
    let name = $('input[name=ListItem]').val();
    let id = generateUUID();
    list.push({id:id.toString(),value:name,class:"",Checked:false});
    render();
    $('input[name=ListItem]').val("");
}

function checkCheckBox(itemId){
    for(let i=0;i<list.length;i++){
        if(list[i].id==itemId){
            list[i].class = "checked";
        }
    }
    render();
}

function clickActive() {
    showType = 'checked';
    $("a[data-filter=active]").addClass('selected');
    buildHtml();
    render();

}
function clickComplete() {
    showType = '';
    buildHtml();
    render();
}

function clickAll() {
    showType = 'all';
    buildHtml();
    render();

}

function buildHtml(){
    let todoList =`<ol >`;

    for(let item of list){
        if(showType==='all'||showType===item.class){
            todoList+=`<li id=${item.id} class=${item.class}>
                <input name="done-todo" type="checkbox" class="done-todo" onclick="checkCheckBox('${item.id}')" ${item.class}> ${item.value} </li>`;
        }

    }
        todoList+=`</ol>
        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" class="selected" onclick="clickAll()">ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" class="" onclick="clickActive()">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" class="" onclick="clickComplete()">Complete</a>
                </li>
            </ul>

        </div>

    </div>`;
    return todoList;
}

const render = ()=>{
    $('#todoForm').html(buildHtml);
}