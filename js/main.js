"use strict";

const formElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');

const form = formElement.classList.remove("collapsed");

const list = listElement

/*Buscar solución problemas*/
const kittenOne = `<img class="card_img"
src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
Es una maravilla acariciarle!
</p>`;

const kittenli = `<li class ="kittenOne">`;
const kitten1 = document.querySelector('.card kittenOne');
kitten1.innerHTML = kittenOne;

