// https://www.attackontitanapi.com/docs

async function fetchCharacters() {
  const response = await fetch(`https://api.attackontitanapi.com/characters`, {mode: 'cors'});
  const characterData = await response.json();
  return characterData;
}

// You can get multiple characters by adding a list of ids as the request parameter /characters/188,1
// GET https://api.attackontitanapi.com/characters/188,1"

async function fetchCharactersById(url) {
  const response = await fetch(`${url}`, {mode: 'cors'});
  const characterData = await response.json();
  return characterData;
}

export {
  fetchCharacters, 
  fetchCharactersById,
};