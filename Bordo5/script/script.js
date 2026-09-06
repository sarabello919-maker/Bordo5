
document.addEventListener("DOMContentLoaded", function (){  
//Aspetta che la pagina HTML sia pronta prima di eseguire JavaScript. 
//addEventListener ascoltatore di eventi in questo caso l'evento "DOMContentLoaded"

  const links = document.querySelectorAll('.nav-piatti a'); //Trova tutti i link interni della pagina.
  //querySelectorAll Cerca tutti gli elementi che corrispondono a questo selettore in questo caso 'a[href^="#"]' 
  // ^= significa inizia con 

  const dishes = document.querySelectorAll('.dish'); //Prendi tutti gli elementi HTML che hanno la classe dish
  //querySelectorAll Cerca TUTTI gli elementi che corrispondono al selettore
  //Trova tutti gli elementi con classe dish(piatto) e mettili nella variabile dishes.


  function mostra(id) {
    dishes.forEach(dish => dish.classList.remove('active')); //Per ogni elemento della lista, togli la classe active

   //Creo una funzione chiamata mostra che è il nome della funzione (scelto da te) id = valore che riceve (es: "pizza")
  //dishes non è un singolo elemento, è una lista per questo uso forEach (per ogni elemento della lista esegui un’azione)
 /*1 dish un singolo elemento della lista, 2 => “fai questa azione su quell’elemento”, 3 dish È LO STESSO elemento di prima, usato dentro, 4 .classList.remove('active') Significa:“togli la classe active da quell’elemento” */

//senza active → nascosto con active → visibile

    const elemento = document.getElementById(id);
   //creo una variabile (trova UN elemento preciso con quell’id)
  //elemento.classList.add('active')
  
    if (elemento) elemento.classList.add('active');
    //se l’elemento esiste…” if(elemento)
   // elemento.classList.add('active') aggiungi la classe active a quell’elemento (active=visibile),es.pizza diventa visibile
  //add('active')ovvero aggiungi la parola active alla lista delle classi
  }


  links.forEach(link => {
    link.addEventListener("click", event => {
    event.preventDefault();

//links (tutti i link), forEach (prendi UNO per UNO tutti i link),(link => { È una funzione che viene eseguita per ogni singolo
//link, link.addEventListener("click", quando succede un click su questo link, esegui del codice
//event => { ... } è la funzione che si attiva quando clicchi,
//event.preventDefault() ovvero blocca il comportamento normale del link

    const id = link.getAttribute("href").substring(1);
    mostra(id);
  
     //link È il link che hai cliccato, tipo: <a href="#pizza">Pizza</a>
    //.getAttribute("href") Significa:“prendi il valore dell’attributo href” "#pizza"
   //.substring(1) Questo significa:“togli il primo carattere” il # viene tolto
  //la prima riga dice quindi prendi l’id dal link e togli il #
 //mostra(id) ovvero mostra("pizza");
//“prende il nome dal link, lo pulisce (# via), e lo usa per mostrare il piatto giusto”
    });
  });

  // SE NON CLICCHI NULLA: mostra il primo

  if (dishes.length > 0) {
    dishes.forEach(dish => dish.classList.remove('active'));
    dishes[0].classList.add('active');
  }
   //if (dishes.length > 0) vuol dire “se esiste almeno un piatto…” (dishes = lista di piatti e .length = quanti elementi ci sono)
  //dishes È una lista di elementi HTML.
 // .forEach(...)Significa:“prendi uno per uno tutti gli elementi della lista”
//dish.classList.remove('active')“per ogni piatto della lista, togli la classe active

    //seconda righa: dishes È la lista di tutti i piatti.
   //[0] Significa:“prendi il primo elemento della lista”
  // dishes[0] Quindi è: il primo piatto (es: Pizza)
 //.classList Sono le classi CSS di quell’elemento.
//.add('active') Significa:“aggiungi la classe active”

// tutto iniseme significa: Se esistono dei piatti nella pagina, allora: spegni tutti i piatti e accendi il primo

/*if (dishes.length > 0)“se ci sono piatti”; length = quanti piatti ci sono> 0 = almeno uno. dishes.forEach(...)“prendi tutti i piatti uno per uno”,dish.classList.remove('active')“spegni ogni piatto (togli active)”, dishes[0].classList.add('active')“accendi il primo piatto”*/

//“se ci sono piatti, mostra solo il primo e nascondi tutti gli altri”

});


const btn = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

//hamburger


