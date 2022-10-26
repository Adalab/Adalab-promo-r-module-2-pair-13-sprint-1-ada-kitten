"use strict";

const sectionElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const form = sectionElement.classList.remove("collapsed");
const btn = document.querySelector('.js-btn');
const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');
const btnSearch = document.querySelector(".js-btn-search");
const btncancel = document.querySelector(".js-btn-cancel");

// Conviertir todos los textos de la etiqueta BODY a minúsculas


//variables de la información de cada gatito
//kitten1
const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastasio'.toUpperCase();
const kittenOneDesc = 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

const kittenOne =  `<li class="card">
                   <article>
                   <img class="card_img" src="${kittenOneImage}"; alt="gatito"/>
                   <h3 class="card_title">${kittenOneName}</h3>
                   <h4 class="card_race">${kittenOneRace}</h4>
                   <p class="card_description">${kittenOneDesc}</p>
                   </article>
                   </li>`

//listElement.innerHTML += kittenOne;

//kitten2
const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

const kittenTwo = `  <li class="card">
                      <article>
                       <img class="card_img" src="${kittenTwoImage}"; alt="gatito"/>
                       <h3 class="card_title">${kittenTwoName}</h3>
                       <h4 class="card_race">${kittenTwoRace}</h4>
                       <p class="card_description">${kittenTwoDesc}</p>
                      </article>
                     </li>`


//listElement.innerHTML += kittenTwo;

//kitten3
const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg" alt="gatito';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc = 'Ruiseño, cariñoso; juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

const kittenThree = `  <li class="card">
                        <article>
                         <img class="card_img" src="${kittenThreeImage}"; alt="gatito"/>
                         <h3 class="card_title">${kittenThreeName}</h3>
                         <h4 class="card_race">${kittenThreeRace}</h4>
                         <p class="card_description">${kittenThreeDesc}</p>
                        </article>
                       </li>`


//listElement.innerHTML += kittenThree;


////////////  condicionales

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = '';
const descrSearchText = input_search_desc.value;

if( kittenOneDesc.includes(descrSearchText) ) {
    listElement.innerHTML += kittenOne;
}
    
    
    if( kittenTwoDesc.includes(descrSearchText) ) {
        listElement.innerHTML += kittenTwo;
    }
    
    if( kittenThreeDesc.includes(descrSearchText) ) {
        listElement.innerHTML += kittenThree;
    }
/////////// condicionales .2

    if (sectionElement.classList.contains('collapsed')) {
        sectionElement.classList.remove('collapsed');
      } else {
        sectionElement.classList.add('collapsed');
      }
    
  //////// condicionales .3 (raza)   
  /* Mirar esta tarde!!!!*/

  let html = '';
  const input_search_race = document.querySelector('.js-race');
  input_search_race.value = ''; /*si ponemos aquí la raza entonces sale*/
  const catRace = document.querySelector('.catRace');

if (input_search_race.value === "") {
  html = `No se ha especificado la raza`;
} else {
  html = input_search_race.value;
} 
catRace.innerHTML = html;

////Evento formulario

btn.addEventListener('click',(event)=>{
  event.preventDefault();
    sectionElement.classList.toggle('collapsed');
});


btnAdd.addEventListener('click',(event)=>{
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
     alert("Debe rellenar todos los valores");
  } else {
    
  }

});

btnSearch.addEventListener('click',(event)=>{
  event.preventDefault();
   
  if (input_search_race.value === '' && input_search_desc.value === '') {
    alert("Debe rellenar todos los valores");
  }

});

btncancel.addEventListener('click',(event)=>{
  event.preventDefault();
  
   inputDesc.value = '';
   inputPhoto.value = '';
   inputName.value = '';

console.log("holi");
  
});
