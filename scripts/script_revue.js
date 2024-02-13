function addBook() {
  // recuperation du contenu du formulaire
  let titre = document.querySelector('#titre').value;
  let edition = document.querySelector('#editeur').value;
  let auteur = document.querySelector('#auteur').value;
  let ISBN = document.querySelector('#isbn').value;

  //Si ISBN n'est pas rempli ou Si titre n'est pas rempli ou Si auteur n'est pas rempli ou Si editeur n'est pas rempli
  if (ISBN.trim() === "" || titre.trim() === "" || auteur.trim() === "" || edition.trim() === "") {
      // on créer une nouvelle div
      let error = document.createElement('div')
      // on rajout du style texte rouge
      error.setAttribute("style", "color:#D2483D; font-size: 30px;")
      // on rajout un id
      error.setAttribute("id", "error")
      // on ajout le message
      error.textContent = "vous ne pouvez pas laisser un champs vide"
      // on l'assigne comme etant enfant du formulaire 
      document.querySelector(".container-form").appendChild(error)
      //sortir de la fonction
      return
  }else{
    //Sinon
          // si mon isbn n'as pas 10 ou 13 chiffres
          if ((ISBN.length !== 10 && ISBN.length !== 13) || !/[0-9]/.test(ISBN)) {
              let error = document.createElement('div')
              // on rajout du style texte rouge
              error.setAttribute("style", "color:#D2483D; font-size: 30px;")
              // on rajout un id
              error.setAttribute("id", "error")
              // on ajout le message
              error.textContent = "Le numéro ISBN n'en est pas un"
              // on l'assigne comme etant enfant du formulaire 
              document.querySelector(".container-form").appendChild(error)
              //sortir de la fonction
              return
          }else{
              //je vais créer une ligne avec le contenu du formulaire
              // let ligne = document.createElement('tr')
              // ligne.innerHTML = `<td>${ISBN}</td><td>${titre}</td><td>${auteur}</td><td>${edition}</td>`//altgr + 7
              // ligne.innerHTML = "<td>"+ ISBN +"</td>"
              let table = document.querySelector('#bibliotheque')
              let row = table.insertRow()
              let cel1 = row.insertCell(0)
              cel1.innerHTML = titre
              let cel2 = row.insertCell(1)
              cel2.innerHTML = edition
              let cel3 = row.insertCell(2)
              cel3.innerHTML = auteur
              let cel4 = row.insertCell(3)
              cel4.innerHTML = ISBN
              
              if (document.getElementById('error')) {
                  document.getElementById('.error').remove()
              }

              document.querySelector('#titre').value = "";
              document.querySelector('#editeur').value = "";
              document.querySelector('#auteur').value = "";
              document.querySelector('#isbn').value = ""; 
              
          }     
  }
}
