document.addEventListener("DOMContentLoaded", afficherProduits);

function afficherProduits() {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    let table = document.getElementById("tableProduits");
    table.innerHTML = "";

    produits.forEach((produit, index) => {
        let row = table.insertRow();
        row.insertCell(0).textContent = produit.nom;
        row.insertCell(1).textContent = produit.prix;
        let actionsCell = row.insertCell(2);

        let boutonModifier = document.createElement("button");
        boutonModifier.innerHTML = '<i class="fas fa-edit"></i>'; // Icône de modification
        boutonModifier.className = "btn btn-warning mx-1";
        boutonModifier.onclick = () => modifierProduit(index);

        let boutonSupprimer = document.createElement("button");
        boutonSupprimer.innerHTML = '<i class="fas fa-trash"></i>'; // Icône de suppression
        boutonSupprimer.className = "btn btn-danger mx-1 p-3";
        boutonSupprimer.onclick = () => supprimerProduit(index);

        actionsCell.appendChild(boutonModifier);
        actionsCell.appendChild(boutonSupprimer);
    });
}


function ajouterProduit() {
    let nom = document.getElementById("nomProduit").value;
    let prix = document.getElementById("prixProduit").value;

    if (nom && prix) {
        let produits = JSON.parse(localStorage.getItem("produits")) || [];
        produits.push({nom, prix});
        localStorage.setItem("produits", JSON.stringify(produits));
    }
}

function supprimerProduit(index) {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    produits.splice(index, 1);
    localStorage.setItem("produits", JSON.stringify(produits));
    afficherProduits();
}

function modifierProduit(index) {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    let nouveauNom = prompt("Nouveau nom :", produits[index].nom);
    let nouveauPrix = prompt("Nouveau prix :", produits[index].prix);
    if (nouveauNom && nouveauPrix) {
        produits[index] = {nom: nouveauNom, prix: nouveauPrix};
        localStorage.setItem("produits", JSON.stringify(produits));
        afficherProduits();
    }
}

function modifierProduit(index) {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    let produit = produits[index];

    // Stocker l'index du produit à modifier
    localStorage.setItem("produitEnCours", JSON.stringify({ index, nom: produit.nom, prix: produit.prix }));

    // Rediriger vers la page de modification
    window.location.href = "modifier.html";
}
