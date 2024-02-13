class Book {
    constructor(titre, edition, auteur, isbn) {
        this.titre = titre,
        this.edition = edition,
        this.auteur = auteur,
        this.isbn = isbn
    }
    add ()
    {
        let table = document.querySelector('#bibliotheque')
        let row = table.insertRow()
        let cel1 = row.insertCell(0)
        cel1.innerHTML = this.titre
        let cel2 = row.insertCell(1)
        cel2.innerHTML = this.edition
        let cel3 = row.insertCell(2)
        cel3.innerHTML = this.auteur
        let cel4 = row.insertCell(3)
        cel4.innerHTML = this.isbn
        //ajouter une cellule 5 contenant une icône de suppression
        let cel5 = row.insertCell(4)
        cel5.innerHTML = `<center><button id=btnSuppr${this.isbn} onclick="remove(this)"><img src="./img/supprimer.png" /></button></center>`
        //const i = document.createElement("i")
        //i.classList.add("fa-solid", "fa-trash")
        //i.setAttribute("onclick", remove(this))
        //cel5.appendChild(i)
    }
  }