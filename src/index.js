import _ from 'lodash'
import './style.css';

import weather from './functions/weather';

function component() {

    const element = document.createElement('div');
  
    return element;
  
}

document.body.appendChild(component());

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });


searchBtn.addEventListener("click", async () => {

    searchResult.classList.add("active");

    if (searchInput.value != "") {

        console.log(searchInput.value);

        weather(searchInput.value);
    }

  });

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/chicago?key=Z54LFD8W85EJGQDCTJRFR4QQB', {
  mode: 'cors'
})
  .then(function(response) {

    return response.json();

  })
  .then(function(response) {

    console.log(response);

    console.log(response.currentConditions.feelslike)
  })
  .catch(function(err) {


  });