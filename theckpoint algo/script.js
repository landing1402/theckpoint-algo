// Une chaine de caracteres / String

  // la longueur de la phrase
let phrase = 'salut les programeurs de pros.';
let longueur = phrase.length;
console.log("la longueur de la phrase est : " + longueur);

//le nombre de mots  dans la phrase
function count(phrase) { 
    return phrase.split(" ").length;
  }
  console.log( "le nombre de mots est : " + count('salut les programeurs de pros.')); 


  //  compter le nombre de voyelles dans la phrase
function compterNbVoyelles(phrase) {
  let nbVoyelles = 0;
  let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
  for (let lettre of phrase) {
      if (voyelles.includes(lettre.toLowerCase())) {
          nbVoyelles ++;
      }
  }
  return nbVoyelles;
}
console.log("le nombre de voyelles est : " + compterNbVoyelles('salut les programeurs de pros.'));









