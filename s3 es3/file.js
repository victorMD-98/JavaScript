let btn = document.querySelector("#invia")
//console.log(btn) 
btn.addEventListener("click",(eve)=>{
    eve.preventDefault()
    let input= document.querySelector("form input")
    //console.log(input.value)
 let task = input.value.trim()
 if(task.length > 2){
    let li = document.createElement("li")
    li.innerText = task
    let ul=  document.querySelector("#lista ul");
    ul.appendChild(li);
    input.value=""
 }
 else{
    alert("valore non idoneo")
 }
 taskComplete()
})

function taskComplete(){
    let li = document.querySelectorAll("#lista ul li")
    for(i=0;i<li.length;i++){
    li[i].addEventListener("click", function (e){
        e.target.className = e.target.className ==="completato" ? "" : "completato"
    })
 } 
}

