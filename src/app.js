/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["Arroz", "Pasta"];
  let adj = ["pollo", "gambas"];
  let noun = ["cebolla", "curry"];

  let domGen = '<ul class="list-group">';
  domGen +=
    '<li class="list-group-item bg-pink text-light fw-bolder">Menú de la semana</li>';

  pronoun.map(iterator => {
    adj.map(item => {
      noun.map(element => {
        domGen += `
        <li class="list-group-item">
        ${iterator} con ${item} y ${element}
        </li>
        `;
      });
    });
  });
  domGen += "</ul>";
  document.querySelector("#randomGen").innerHTML = domGen;
};
