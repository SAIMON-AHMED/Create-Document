function generateDocument(characters, document) {
  let characterCounts = {};

  for (const character of characters) {
    if (!characterCounts.hasOwnProperty(character)) {
      characterCounts[character] = 0;
    }
    characterCounts[character]++;
  }

  for (const character of document) {
    if (!characterCounts.hasOwnProperty(character) || characterCounts[character] === 0) {
      return false;      
    }
    characterCounts[character]--;
  }
  return true;
}

