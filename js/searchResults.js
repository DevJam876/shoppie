import { nominateMovie } from './nominate.js';

export const updateSearchResults = (data) => {
  const searchResults = document.getElementById('searchResults');
  clearSearchResults();
  if (data.Search) {
    const searchResults = document.getElementById('searchResults');
    for (let i = 0; i < data.Search.length; i++) {
      let li = document.createElement('li');
      let button = document.createElement('button');
      let linebreak = document.createElement('br');
      let div = document.createElement('div');
      div.innerHTML = `${data.Search[i].Title} <em>(${data.Search[i].Year})</em>`;
      //li.innerHTML = `${data.Search[i].Title}, ${data.Search[i].Year}`;
      button.appendChild(document.createTextNode('Nominate'));
      button.setAttribute('data-title', data.Search[i].Title);
      button.setAttribute('data-year', data.Search[i].Year);
      button.setAttribute('data-img', data.Search[i].Poster);
      button.classList.add('nominateBtn');
      //create func in nominate.js
      button.addEventListener('click', nominateMovie);
      // li.appendChild(linebreak);
      div.classList.add('liText');
      li.appendChild(div);
      li.appendChild(button);
      searchResults.appendChild(li);
    }

    searchResults.style.display = 'block';
  }
};

export const clearSearchResults = () => {
  const searchResults = document.getElementById('searchResults');
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }
};
