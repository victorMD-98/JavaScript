class User{
    constructor(nome,cognome,anni,location){
        this.nome=nome;
        this.cognome=cognome;
        this.anni=anni;
        this.location=location
    }
    
    confronto(a){
        if(this.anni>a.anni){
            console.log(this.nome + " è più grande di " + a.nome)
        }
        else{
            console.log(this.nome + " è più piccola di " + a.nome)
        }
    }
}
class Donna extends User{
    constructor(nome,cognome,anni,location){
        super(nome,cognome,anni,location)
    }
}
let donna = new Donna("francesca","guardone",31,"torino")
let donna2 = new Donna("Sara","guardone",33,"torino")
let donna3 = new Donna("Giovanna","guardone",45,"torino")
console.log(donna)
console.log(donna2)
donna.confronto(donna3)


let bottone= document.querySelector("button")
console.log(bottone)

bottone.addEventListener("click",ele=>{
    ele.preventDefault();
    let form= document.forms;
    console.log(form);
    let petName=form[0][0].value;
    let ownerName=form[0][1].value;
    let species=form[0][2].value;
    let breed=form[0][3].value;
    console.log(petName,ownerName,species,breed);
    let pet = new Pet(petName,ownerName,species,breed);
    addList(pet)
})

function addList(pet){
let lista=document.querySelector("ul")
let li = document.createElement("li")
li.innerHTML = " Nome Pet: " + pet.petName + " Nome Padrone: " + pet.ownerName + " Specie: " + pet.species + " Razza: " + pet.breed 
lista.appendChild(li)
let conto= document.querySelector("h3 span")
conto.innerHTML = Pet.count
}

class Pet{
    static count=0
    constructor(petName,ownerName,species,breed){
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
        Pet.count++
    }
    padrone(pet){
        if(pet.ownerName===this.ownerName){
            return "stesso padrone"
        }
        else{
            return "padroni diversi"
        }
    }
}

