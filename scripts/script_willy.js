

function addBook() {
    // recuperation du contenu du formulaire
    let ISBN = document.querySelector('#ISBN').value;
    let titre = document.querySelector('#Titre').value;
    let auteur = document.querySelector('#Auteur').value;
    let edition = document.querySelector('#Editeur').value;

   

    //Si ISBN n'est pas rempli ou Si titre n'est pas rempli ou Si auteur n'est pas rempli ou Si editeur n'est pas rempli
    if (ISBN.trim() === "" || titre.trim() === "" || auteur.trim() === "" || edition.trim() === "") {
        // on créer une nouvelle div
        let error = document.createElement('div')
        // on rajout du style texte rouge
        error.setAttribute("style", "color:red; font-size: 30px;")
        // on rajout un id
        error.setAttribute("id", "error")
        // on ajout le message
        error.textContent = "vous ne pouvez pas laisser un champs vide"
        // on l'assigne comme etant enfant du formulaire 
        document.querySelector(".form").appendChild(error)
        //sortir de la fonction
        return
    }else{
      //Sinon
            // si mon isbn n'as pas 10 ou 13 chiffres
            if ((ISBN.length !== 10 && ISBN.length !== 13) || !/[0-9]/.test(ISBN)) {
                let error = document.createElement('div')
                // on rajout du style texte rouge
                error.setAttribute("style", "color:red; font-size: 30px;")
                // on rajout un id
                error.setAttribute("id", "error")
                // on ajout le message
                error.textContent = "Le numero ISBN n'en ai pas un"
                // on l'assigne comme etant enfant du formulaire 
                document.querySelector(".form").appendChild(error)
                //sortir de la fonction
                return
            }else{
                //je vais créer une ligne avec le contenu du formulaire
                // let ligne = document.createElement('tr')
                // ligne.innerHTML = `<td>${ISBN}</td><td>${titre}</td><td>${auteur}</td><td>${edition}</td>`//altgr + 7
                // ligne.innerHTML = "<td>"+ ISBN +"</td>"
                let table = document.querySelector('table')
                let row = table.insertRow()
                let cel1 = row.insertCell(0)
                cel1.innerHTML = ISBN
                let cel2 = row.insertCell(1)
                cel2.innerHTML = titre
                let cel3 = row.insertCell(2)
                cel3.innerHTML = auteur
                let cel4 = row.insertCell(3)
                cel4.innerHTML = edition
                
                if (document.getElementById('error')) {
                    document.getElementById('error').remove()
                }

                document.querySelector('#ISBN').value = ""; 
                document.querySelector('#Titre').value = "";
                document.querySelector('#Auteur').value = "";
                document.querySelector('#Editeur').value = "";
            }     
    }
}



