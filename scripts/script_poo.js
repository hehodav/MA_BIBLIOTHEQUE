function addBook() {
    //   class Book {
    //     constructor(titre, edition, auteur, isbn) {
    //         this.titre = titre,
    //         this.edition = edition,
    //         this.auteur = auteur,
    //         this.isbn = isbn
    //     }
    //     add ()
    //     {
    //         let table = document.querySelector('#bibliotheque')
    //         let row = table.insertRow()
    //         let cel1 = row.insertCell(0)
    //         cel1.innerHTML = this.titre
    //         let cel2 = row.insertCell(1)
    //         cel2.innerHTML = this.edition
    //         let cel3 = row.insertCell(2)
    //         cel3.innerHTML = this.auteur
    //         let cel4 = row.insertCell(3)
    //         cel4.innerHTML = this.isbn
    //     }
    //   }

    // recuperation du contenu du formulaire
    let titre = document.querySelector('#titre').value;
    let edition = document.querySelector('#editeur').value;
    let auteur = document.querySelector('#auteur').value;
    let isbn = document.querySelector('#isbn').value;
    let gif = document.querySelector('#gif').value

    //Si ISBN n'est pas rempli ou Si titre n'est pas rempli ou Si auteur n'est pas rempli ou Si editeur n'est pas rempli
    if (isbn.trim() === "" || titre.trim() === "" || auteur.trim() === "" || edition.trim() === "") {
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
    } else {
        //Sinon
        // si mon isbn n'as pas 10 ou 13 chiffres
        if ((isbn.length !== 10 && isbn.length !== 13) || !/[0-9]/.test(isbn)) {
            let error = document.createElement('div')
            // on rajout du style texte rouge
            error.setAttribute("style", "color:#D2483D; font-size: 30px;")
            // on rajout un id
            error.setAttribute("id", "error")
            // on ajout le message
            error.textContent = "Le numero ISBN n'en ai pas un"
            // on l'assigne comme etant enfant du formulaire 
            document.querySelector(".container-form").appendChild(error)
            //sortir de la fonction
            return
        } else {
            const book = new Book(titre, edition, auteur, isbn)
            //je vais créer une ligne avec le contenu du formulaire
            // let ligne = document.createElement('tr')
            //ligne.innerHTML = `<td>${ISBN}</td><td>${titre}</td><td>${auteur}</td><td>${edition}</td>`//altgr + 7
            // ligne.innerHTML = "<td>"+ ISBN +"</td>"
            book.add()
            api(gif)

            //   let table = document.querySelector('#bibliotheque')
            //   let row = table.insertRow()
            //   let cel1 = row.insertCell(0)
            //   cel1.innerHTML = book.titre
            //   let cel2 = row.insertCell(1)
            //   cel2.innerHTML = book.auteur
            //   let cel3 = row.insertCell(2)
            //   cel3.innerHTML = book.edition
            //   let cel4 = row.insertCell(3)
            //   cel4.innerHTML = book.isbn

            if (document.getElementById('error')) {
                document.getElementById('error').remove()
            }

            document.querySelector('#titre').value = "";
            document.querySelector('#editeur').value = "";
            document.querySelector('#auteur').value = "";
            document.querySelector('#isbn').value = "";
            document.querySelector('#gif').value = "";
        }
    }
}

function remove(i) {
    const row = i.closest("tr")
    row.remove()
}


// ***************** API - HAPI BOOKS ******************************************************
// async function test() {
//     const url = 'https://hapi-books.p.rapidapi.com/search/the+walking+dead';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'e84e1c1fbcmsh644ed2378814705p1c573bjsn052640994596',
//             'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// test()



// Tests autres API
async function api(param_gif) {
    try {
        let result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Yam3vizGJI8koszJHAHVOJkePCDLAITS&q=${param_gif}&limit=5&offset=0&rating=g&lang=fr&bundle=messaging_non_clips`)
        // transformer le result en json
        result = await result.json()
        //console.log(result)
        
        let image = document.createElement("img")
        image.setAttribute('src', result.data[4].images.original.url)
        document.querySelector('body').appendChild(image)

    } catch (error) {
        console.error(error);
    }
}


// async function api_villes() {
//     try {
//         let result2 = await fetch("https://geo.api.gouv.fr/communes?codeDepartement=78")
//         // transformer le result en json
//         result2 = await result2.json()
//         console.log(result2)
        
//     } catch (error) {
//         console.error(error);
//     }
// }

// api_villes ()
