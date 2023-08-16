//new item add
function addnewItem(){
    const newItem = prompt("enter  new item");
    if(newItem){
        const item = document.createElement('li');
        item.innerText=newItem;

        const list =document.getElementById('myList');
        list.appendChild(item);
    }
}

//function to remove the item
function removeItem(){
    const list = document.getElementById('myList');
    if(list.children.length>0){
        const firstItem = list.firstChild;
        list.removeChild(firstItem);
    }
}
