
//Récupération des élément du DOM
let titre = document.getElementById("titre");
let editeur = document.getElementById("editeur");
let auteur = document.getElementById("auteur");
let isbn = document.getElementById("isbn");


// Récupération de l'élément du DOM en local storage
//const bibliotheque = localStorage.getItem("bibliotheque");
// Affectation du contenu récupéré à l'élément du DOM
//document.getElementById("bibliotheque").innerHTML = bibliotheque;


//Fonctions Tests des champs du formulaire
function validerTitre(title) {
  if (title.value.length === 0) // /!\ avec .length, si il y a un espace 
  {
    let spanErreurTitre = document.getElementById("erreurMessageTitre");
    if (!spanErreurTitre) {
      let pTitre = document.getElementById("pTitre");
      spanErreurTitre = document.createElement("span");
      spanErreurTitre.id = "erreurMessageTitre";
      let txtMessageErreurTitre = document.createTextNode("Veuillez renseigner le titre du livre");
      pTitre.appendChild(spanErreurTitre);
      spanErreurTitre.appendChild(txtMessageErreurTitre)
    }
  }
}

function validerEditeur(editor) {
  if (editor.value.length === 0) {
    let spanErreurEditeur = document.getElementById("erreurMessageEditeur");
    if (!spanErreurEditeur) {
      let pEditeur = document.getElementById("pEditeur");
      spanErreurEditeur = document.createElement("span");
      spanErreurEditeur.id = "erreurMessageEditeur";
      let txtMessageErreurEditeur = document.createTextNode("Veuillez renseigner l'éditeur du livre");
      pEditeur.appendChild(spanErreurEditeur);
      spanErreurEditeur.appendChild(txtMessageErreurEditeur);
    }
  }
}

function validerAuteur(author) {
  if (author.value.length === 0) {
    let spanErreurAuteur = document.getElementById("erreurMessageAuteur");
    if (!spanErreurAuteur) {
      let pAuteur = document.getElementById("pAuteur");
      spanErreurAuteur = document.createElement("span");
      spanErreurAuteur.id = "erreurMessageAuteur";
      let txtMessageErreurAuteur = document.createTextNode("Veuillez renseigner l'auteur du livre");
      pAuteur.appendChild(spanErreurAuteur);
      spanErreurAuteur.appendChild(txtMessageErreurAuteur);
    }
  }
}

function validerISBN(num_isbn) {
  let spanErreurISBN = document.getElementById("erreurMessageISBN");

  if (!spanErreurISBN) {
    spanErreurISBN = document.createElement("span");
    spanErreurISBN.id = "erreurMessageISBN";
    let pISBN = document.getElementById("pISBN");

    if (num_isbn.value.length === 0) {
      let txtMessageErreurISBN_manquant = document.createTextNode("Veuillez renseigner l'ISBN du livre");
      pISBN.appendChild(spanErreurISBN);
      spanErreurISBN.appendChild(txtMessageErreurISBN_manquant);
    }
    else if (num_isbn.value.length !== 10 && num_isbn.value.length !== 13) {
      let txtMessageErreurISBN_incorrect1 = document.createTextNode("Veuillez renseigner un code ISBN de 10 ou 13 caractères");
      pISBN.appendChild(spanErreurISBN);
      spanErreurISBN.appendChild(txtMessageErreurISBN_incorrect1);
    }
    else {
      for (let i = 0; i < num_isbn.value.length; i++) {
        if (isNaN(num_isbn.value.charAt(i))) {
          let txtMessageErreurISBN_incorrect2 = document.createTextNode("Veuillez renseigner un code ISBN ne contenant que des chiffres");
          pISBN.appendChild(spanErreurISBN)
          spanErreurISBN.appendChild(txtMessageErreurISBN_incorrect2);
        }
      }

    }
  }
}

// Fonction pour écrire dans le tableau
function insertTable() {
  let data = [titre, editeur, auteur, isbn]
  let table = document.getElementById("table");

  for (let i = 0; i < 1; i++) {
    let row = table.insertRow();

    for (let j = 0; j < 4; j++) {
      let cell = row.insertCell();
      cell.innerHTML = data[j].value;
    }
  }

  // Récupération de l'élément du DOM
  //const bibliotheque = document.getElementById("bibliotheque")
  // Mémorisation de l'élément du DOM en local storage
  //localStorage.setItem("bibliotheque", bibliotheque.innerHTML);
}

function viderForm() {
  titre.value = ""
  editeur.value = ""
  auteur.value = ""
  isbn.value = ""
}


let btnInscrire = document.getElementById("btnInscrire")

btnInscrire.addEventListener("click", () => {
  validerTitre(titre)
  validerEditeur(editeur)
  validerAuteur(auteur)
  validerISBN(isbn)

  let spanErreurTitre = document.getElementById("erreurMessageTitre");
  let spanErreurEditeur = document.getElementById("erreurMessageEditeur");
  let spanErreurAuteur = document.getElementById("erreurMessageAuteur");
  let spanErreurISBN = document.getElementById("erreurMessageISBN");

  if (!spanErreurTitre && !spanErreurEditeur && !spanErreurAuteur && !spanErreurISBN) {
    insertTable()
    viderForm()
  }
})

titre.addEventListener("focus", () => {
  let spanErreurTitre = document.getElementById("erreurMessageTitre");
  if (spanErreurTitre) {
    let pTitre = document.getElementById("pTitre");
    pTitre.removeChild(spanErreurTitre);
  }
})

editeur.addEventListener("focus", () => {
  let spanErreurEditeur = document.getElementById("erreurMessageEditeur");
  if (spanErreurEditeur) {
    let pEditeur = document.getElementById("pEditeur");
    pEditeur.removeChild(spanErreurEditeur);
  }
})

auteur.addEventListener("focus", () => {
  let spanErreurAuteur = document.getElementById("erreurMessageAuteur");
  if (spanErreurAuteur) {
    let pAuteur = document.getElementById("pAuteur");
    pAuteur.removeChild(spanErreurAuteur);
  }
})

isbn.addEventListener("focus", () => {
  let spanErreurISBN = document.getElementById("erreurMessageISBN");
  if (spanErreurISBN) {
    let pISBN = document.getElementById("pISBN");
    pISBN.removeChild(spanErreurISBN);
  }
})