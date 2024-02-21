// https://www.attackontitanapi.com/docs

async function fetchCharacters() {

  const response = await fetch(`https://api.attackontitanapi.com/characters`, {mode: 'cors'});
  const characterData = await response.json();
  //console.log(characterData);
  return characterData;  
}


// "You can get a single character by adding an id as the request parameter /characters/188:
// GET https://api.attackontitanapi.com/characters/188"
async function fetchCharacterById(id) {
  const response = await fetch(`https://api.attackontitanapi.com/characters${id}`, {mode: 'cors'});
  const characterData = await response.json();
  return characterData;
}

export {
  fetchCharacters, 
  fetchCharacterById,
};