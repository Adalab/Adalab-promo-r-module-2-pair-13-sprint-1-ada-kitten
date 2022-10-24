"use strict";

const formElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const form = formElement.classList.remove("collapsed");

// Conviertir todos los textos de la etiqueta BODY a minúsculas

//String.toUpperCase DUDA


//variables de la información de cada gatito
//kitten1
const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastasio'; 
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
const kittenTwoName = 'Fiona';
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
const kittenThreeName = 'Cielo';
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

    if (formElement.classList.contains('collapsed')) {
        //completa el código
      } else {
        //completa el código
      }
    

