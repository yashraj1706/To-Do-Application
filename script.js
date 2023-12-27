let item,checkbox,lable,li,list,deleteButton,p;
list=document.querySelector(".list");
document.querySelector("#new-task").addEventListener("click",(e)=>{
    e.preventDefault();
    item=document.querySelector("#task").value;
    document.querySelector("#task").value='';
    if(item===''){
        
        alert("Enter a task first")
    }
    else{
        p=document.createElement('span')
        p.innerHTML=item;
        li=document.createElement('li');
        li.appendChild(p)
        li.setAttribute("class"," ");
        img=document.createElement("img");
        img.setAttribute('src','./imgs/trash-can-with-cover-svgrepo-com (1).png')
        img.setAttribute('class','remove');
        li.appendChild(img);
        list.appendChild(li);
        saveData()
    }
})

let input=document.querySelector('input')
input.addEventListener('keypress',(e)=>{
    if(e.key==="Enter"){
        document.getElementById('new-task').click();
    }
})

let checkUncheck;
document.querySelector('ul').addEventListener("click",(e)=>{
    
    if(e.target.tagName!=='UL'){
        if(e.target.className==='checked'){
        e.target.setAttribute('class',' ');
        saveData()
        return;
        }
        else if(e.target.className==='remove'){
        
        if(e.target.parentElement.tagName!=='UL'){
            e.target.parentElement.remove();
            saveData()
        }
    }
    else{
        e.target.setAttribute('class','checked');
        saveData()
    }
    }
    
})

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function restoreData(){
    list.innerHTML=localStorage.getItem('data');
}
restoreData();
