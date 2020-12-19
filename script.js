var button=document.getElementById("userbuttonaction");
var inputbox=document.getElementById("usertextinput");
var ul = document.querySelector("ul");

button.addEventListener("click",AddListItemOnClick);
inputbox.addEventListener("keypress",AddListItemOnKeyPress);

function AddListItemOnClick(){
    if (inputbox.value.length > 0)
    {
        AddListItems();
    }
}

function AddListItemOnKeyPress(event){
    if ((inputbox.value.length > 0) && (event.keyCode===13))
    {
        AddListItems();
    }
}

function AddListItems(){
    var delbutton=document.createElement("button");
    delbutton.innerHTML="X";
    var li=document.createElement("li");
    var inputtext=document.createTextNode(inputbox.value);
        
    ul.appendChild(li);
    li.appendChild(delbutton);
    li.appendChild(inputtext);
    
    inputbox.value="";

    addListListener();
    addRemoveListener();
}

//Toggling list item to Done Status
var li=document.getElementsByTagName('li');

function addListListener(){
    for (var i=0;i<li.length;i++){
        li[i].addEventListener("click", ChangeListStatus);
    }
}

function ChangeListStatus(){
    this.classList.toggle("done");
}

//Removing List Item on button click
function addRemoveListener(){
    var libutton =document.querySelectorAll('li button');
    for (var i=0;i<libutton.length;i++){
        libutton[i].addEventListener("click",RemoveListItem);
    }
}

function RemoveListItem(){
    for(var i=0;i<li.length;i++){
        this.parentNode.remove();
    }
}







