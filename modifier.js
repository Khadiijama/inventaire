document.addEventListener("DOMContentLoaded", function() {
    let produit = JSON.parse(localStorage.getItem("produitEnCours"));
    
    if (produit) {
        document.getElementById("nomProduit").value = produit.nom;
        document.getElementById("prixProduit").value = produit.prix;
    }
});

function enregistrerModification() {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];
    let produit = JSON.parse(localStorage.getItem("produitEnCours"));

    let nouveauNom = document.getElementById("nomProduit").value;
    let nouveauPrix = document.getElementById("prixProduit").value;

    produits[produit.index] = { nom: nouveauNom, prix: nouveauPrix };

    localStorage.setItem("produits", JSON.stringify(produits));
    localStorage.removeItem("produitEnCours");

    window.location.href = "produits.html"; // Retour à la liste
}
