/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
area = (l1,l2) => l1*l2;
console.log(area(5,5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum (n1,n2){
    if(n1===n2){
        return ((n1+n2)*3);
    }
    else{
        return n1+n2;
    }
}
console.log(crazySum(9,10))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff (num){
    if(num>19){
        return (num-19)*3
    }
    else{
        return num-19
    }
}
let dif= Math.abs(crazyDiff(7))
console.log(dif)
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if(n>=20 && n<=100 || n===400){
        return true
    }
    else if(n<20 || n>100){
        return false
    }
}
let num4=boundary(20)
console.log(num4)
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(arg){
    if(arg.slice(0,7)==="EPYCODE"){
        return arg
    }
    return "EPYCODE"+arg
   }
let arg1 = epify("EPYCODE è interessante")
console.log(arg1)
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(p){
    if(p%3===0 && p%7===0){
        return "il numero è multiplo sia di 3 che di 7"
    }
    else if(p%7===0){
        return "il numero è un multiplo di 7"
    }
    else if(p%3===0){
        return "il numero è un multiplo di 3"
    }
    else if((p%3)>0 || (p%7)>0){
        return "il numero non è multiplo ne di 3 ne di 7"
    }
}
let mult= check3and7(14)
console.log(mult)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str){
    let reverse=str.split("")
    let rev=reverse.reverse()
    return rev.join("")
}   
let stringa = reverseString("EPICODE")
console.log(stringa)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(frase){
    let upper=frase.split(" ")
    let newfrase= " "
    for(let i=0;i<upper.length;i++){
        let maiusc=upper[i].charAt(0).toUpperCase();
        let slice = upper[i].slice(1);
        let fras= maiusc+slice;
        newfrase += fras + " ";
    }

    return newfrase
}

console.log(upperFirst("ciao come stai?"))




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str){
return str.slice(1, -1)
}
console.log(cutString("ciaonee"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n){
    let arr=[]
    for(let i=0;i<n;i++){ 
    let nRand=Math.floor(Math.random()*11);
    arr.push(nRand);
}
    return arr
}
console.log(giveMeRandom(20))
/* SCRIVI QUI LA TUA RISPOSTA */
