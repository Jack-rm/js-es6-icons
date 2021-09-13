
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/**
 * Milestone #1
 * Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 * 
 * Milestone #2
 * Coloriamo le icone per tipo
 * 
 * Milestone #3
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/


const colors = [

]

/*
* Milestone #2
* coloriamo le icone per tipo.
*/

/*
* Milestone #3
* creiamo una select con i tipi di icone e usiamola per filtrare le icone.
*
* - prima cosa dobbiamo generare le opzioni nella select per ogni tipo
* - filtrare gli elementi da visualizzare in base alla selezione [onChange].
*/

// prendiamo il nostro container da id
let container = document.getElementById("my_icon-box")

/* METODI ALTERNATIVI PER REQUISIRE UN ELEMENTO HTML:
// preso come primo element by class
container = document.getElementsByClassName("my_icon-container")[0];
// preso come primo elemento attraverso queryselector
container = document.querySelector(".my_icon-container");
// stessa cosa ma di solito non si usa per il singolo
container = document.querySelectorAll(".my_icons-container")[0];
*/

console.log(container);

colorizedIcons = colorizeItems(icons, colors);
printToPage(colorizedIcons, container);

const types = getUniquePropertyValues(icons, "type");
const select = document.querySelector("#my_select");

//aggiungo alla select selezionata le opzioni dei tipi esistenti
addOptions(types, select);

// aggiungo un event listener sul cambiamento del valore della select
select.addEventListener("change", () => {

   //dichiaro ed inizializzo il valore che ci interessa in una variabile locale
   const selectedValue = select.value;
  
   // dichiaro ed inizializzo la lista di icone filtrata
   const filteredIcons = filterItems(colorizedIcons, selectedValue);
   
   //la stampo attraverso la funzione apposita
   printToPage(filteredIcons, container);
});


console.log(colorizeItems())

//const types = getUniquePropertyValues(icons, "type");
//console.log(types);





// ### FUNZIONI ###

/**
* mostro in pagina all'interno del container, in html, tutti gli elementi dell'array dato 
* @param {*} array array da stampare
* @param {*} container il container (htmlObject) all'interno del quale inserire i nostri elementi
*/
function printToPage(array, container){

   let temporaryHTML = "";

   // ciclo per l'array dato come argomento
   array.forEach((element) => {
       
       //destrutturazione sull'elemento
       const {family, name, prefix, type, color} = element;
       // const family = element.family;
       // const name = element.name;
       // const prefix = element.prefix;
       // const type = element.type;

       // aggiungo all'html del container il contenuto in html
       temporaryHTML += 
       `<div class="text-center flex-item mb-5 pt-4 pb-4">
           <i class="${family} ${prefix}${name}" style="color:${color}"></i>
           <h4 class="my_icon-title text-uppercase">${name}</h4>
        </div>
       `
   });

   // container.append( .. html ... ); 
   container.innerHTML = temporaryHTML;
}


/**
* funzione che prende un array di oggetti e il nome della proprietà univoca da analizzare
* e ritorna un array di valori univoci della proprietà dell'array dato.
* 
*/
function getUniquePropertyValues (array, property){
   const types = [];

   array.forEach((element) => {
       if (! types.includes(element[property])){
           types.push(element[property]);
       }
   })

   return types;
}


/**
* Funzione che colora randomicamente gli elementi dell'array dato come argomento:
* ovvero crea una proprietà colore per ogni oggetto presente nell'array
* e la popola con un colore randomico.
*  
* @param {*} array l'array di elementi da colorare
* @returns l'array di elementi originale con gli elementi colorati randomicamente
*/
function colorizeItems(array) {

   const types = getUniquePropertyValues(array, "type");
   console.log(types);

   const colors = [];

   types.forEach((element) => colors.push("#" +getRandomColor()));

   /*
   if ( types.length > colors.length){
       return null;
   }
   */

   const colorizedArray = array.map((element) => {

       // element è l'oggetto singolo presente nell'array

       // types = ["blabla", "cococo", "fafafa"]

       // indexOfType di cococo = 2

       //salviamo in una variabile locale -indexOfType- l'indice dell'elemento (element.type)
       const indexOfType = types.indexOf(element.type);
       // se è presente indexOfType sarà diverso da 1 e quindi
       if ( indexOfType !== -1 ) {
           // inserisco come nuova proprietà -color- il colore che si trova allo stesso indice
           // del nostro tipo nell'array dei tipi, ma che si trova nell'array colori.
           element.color = colors[indexOfType]
       }

       return element;
   });

   return colorizedArray;
};


// creare un oggetto <select></select> con dentro <option value=""></option>


/**
* aggiunge le opzioni presenti nell'array alla select options
* 
* @param options l'array di opzioni da aggiungere
* @param select la select da aggiornare
*/
function addOptions(options, select){

   options.forEach((element) => {
       select.innerHTML += `<option value="${element}">${element}</option>`;
   });
   console.log(select);
}


/**
* Filtra gli elementi dell'array in base al filtro richiesto
* 
* @param {*} array l'array da filtrare
* @param {*} filter il filtro (stringa) da usare
* @returns ritorna l'array originale se il filtro è -all-, filtrato in tutti gli altri casi
*/
function filterItems(array, filter){

   // se ho selezionato al ritorno tutto l'array 
   if (filter.trim().toLoweCase() === "all"){
       return array;
   }

   // altrimenti ritorno esclusivamente i valori che hanno come tipo 
   // il tipo specificato come -filter- in questa funzione
   return array.filter((element) => element.type == filter);
}


/**
* Funzione che ritorna un colore randomico in esadecimale senza - # -
* @returns il colore randomico come stringa hex
*/
function getRandomColor() {
   return Math.floor(Math.random()*16777215).toString(16);
}


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}