let btnAdd = document.querySelector(".es1 .btn-outline-success")
console.log(btnAdd)
let btnReset = document.querySelector(".es1 .btn-outline-danger")
console.log(btnReset)

//bottone salva utente
btnAdd.addEventListener("click", () => {
let input= document.querySelector(".es1 .form-control").value.trim();
localStorage.setItem("Utente",input);
document.querySelector(".es1 .form-control").value="";
document.querySelector(".es1 fieldset").innerHTML = input;
})

//bottone cancella utente
btnReset.addEventListener("click", () => {
    localStorage.removeItem("Utente")
    document.querySelector(".es1 fieldset").innerHTML = "";
})

//esercizio2

let contator = sessionStorage.getItem("contatore") || 0;
document.querySelector(".es2 h1").innerText=contator;
setInterval(() => {
    document.querySelector(".es2 h1").innerText=contator;
    sessionStorage.setItem("contatore",contator)
    contator++
}, 1000);

//esercizio3
let toDoList = [];
let btnAddToDo = document.querySelector(".es3 .btn-outline-success")
console.log(btnAddToDo)
lista()
btnAddToDo.addEventListener("click",()=>{
    let inp=document.querySelector(".es3 .form-control").value.trim();
    toDoList.push(inp);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
    lista()
})

function lista () {
    let jsonList= localStorage.getItem("toDoList");
    if(jsonList){
        toDoList=JSON.parse(jsonList);
        console.log(toDoList)
    let ul = document.querySelector(".todo ul")
    ul.innerText= " "
    toDoList.forEach((ele,index )=>{
        let li= document.createElement("li")
        li.className="list-group-item"
        // li.innerHTML=`<span>${ele}</span><button type="button" class="btn w-100 btn-outline-danger">Reset</button>`;
        let span= document.createElement("span")
        span.innerText= (index+1) + " - " + ele
        let bottone= document.createElement("button")
        bottone.innerText= "elimina"
        bottone.classList="btn w-100 btn-outline-danger"
        bottone.name=index;
        li.appendChild(span)
        li.appendChild(bottone)
        ul.appendChild(li)
        bottone.addEventListener("click",(e)=>{
            console.log(e.target.name)
            toDoList.splice(e.target.name, 1)
            localStorage.setItem("toDoList",JSON.stringify(toDoList));
            lista()
        })
    })
}
}