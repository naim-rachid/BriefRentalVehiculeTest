//---
const seclectElmtBoiteVitesse = document.querySelector('#boite_vitesse');

boite_vitesse.addEventListener('change', function() {
    // Les élément du bloc liste_carburant
    let liste_carburant = document.querySelector('#liste_carburant');
    var liste_carburant_pour_moto = document.querySelector('#liste_carburant_pour_moto');
    
    // Les éléments du bloc liste_vehicule
    var liste_vehicule = document.querySelector('#liste_vehicule');
    var liste_vehicule_pour_manuelle = document.querySelector('#liste_vehicule_pour_manuelle');
    var liste_vehicule_pour_automatique = document.querySelector('#liste_vehicule_pour_automatique');

    let valeurSelectionnee = seclectElmtBoiteVitesse.options[seclectElmtBoiteVitesse.selectedIndex].value;
    let textSelectionnee = seclectElmtBoiteVitesse.options[seclectElmtBoiteVitesse.selectedIndex].text;
    if (valeurSelectionnee == "moto") // Afficher seulement le bloc de la liste carburant pour moto
    {
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        liste_carburant_pour_moto.style.display = 'block';
        //
        liste_vehicule.style.display = 'none';
        liste_vehicule_pour_manuelle.style.display = 'none';
        liste_vehicule_pour_automatique.style.display = 'none';
        //
        listeCarburantPourCitadine.style.display = 'none';
        console.log("listeCarburantPourCitadine.style.display = ", listeCarburantPourCitadine.style.display);
    }
    else if (valeurSelectionnee == "manuelle") // Afficher seulement le bloc de la liste vehicule pour manuelle
    {
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_vehicule.style.display = 'block';
        liste_vehicule_pour_manuelle.style.display = 'block';
        //
        liste_carburant.style.display = 'none';
        liste_carburant_pour_moto.style.display = 'none';
        //
        liste_vehicule_pour_automatique.style.display = 'none';
    }
    else if (valeurSelectionnee == "automatique") 
    {
        console.log("boite à vitesse choisie = ", valeurSelectionnee);
        liste_vehicule.style.display = 'block';
        liste_vehicule_pour_automatique.style.display = 'block';
        //
        liste_carburant.style.display = 'none';
        liste_carburant_pour_moto.style.display = 'none';
        //
        liste_vehicule_pour_manuelle.style.display = 'none';
    }
    else {
        liste_carburant_pour_moto.style.display = 'none';
        liste_carburant.style.display = 'none';
    }
});

//---
const seclectElmtType_vehicule_m = document.querySelector('#type_vehicule_m');
var listeCarburantPourCitadine;
seclectElmtType_vehicule_m.addEventListener('change', function(){
    // Les élément du bloc liste_carburant
    let liste_carburant = document.querySelector('#liste_carburant');
    // Les élément du bloc de 'liste des véhicules manuelle' pour Citadine
    listeCarburantPourCitadine = document.querySelector("#liste_carburant_pour_citadine");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Compact
    var listeCarburantPourCompact = document.querySelector("#liste_carburant_pour_compact");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Utilitaire
    var listeCarburantPourUtilitaire = document.querySelector("#liste_carburant_pour_utilitaire");
    // Les élément du bloc de 'liste des véhicules manuelle' pour Engin de Chantier
    var listeCarburantPourEnginChantier = document.querySelector("#liste_carburant_pour_engin_chantier");

    let valeurSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].value;
    let textSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].text;

    if (valeurSelectionnee == "citadine") {
        console.log("Type de véhicule manuelle choisie - text = ", textSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCitadine.style.display = 'block';
        //
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "compact") {
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCompact.style.display = 'block';
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "utilitaire") {
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourUtilitaire.style.display = 'block'
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourEnginChantier.style.display = 'none';
    }
    else if (valeurSelectionnee == "engin_chantier") {
        console.log("Type de véhicule manuelle choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourEnginChantier.style.display = 'block'
        //
        listeCarburantPourCitadine.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
    }
    else {
        listeCarburantPourEnginChantier.style.display = 'none';
        listeCarburantPourUtilitaire.style.display = 'none';
        listeCarburantPourCompact.style.display = 'none';
        listeCarburantPourCitadine.style.display = 'none';
        liste_carburant.style.display = 'none';
    }
});

//---
const seclectElmtTypeVehiculeAuto = document.querySelector('#type_vehicule_auto');
seclectElmtTypeVehiculeAuto.addEventListener('change', function(){
    // Les élément du bloc liste_carburant
    let liste_carburant = document.querySelector('#liste_carburant');
    // Les élément du bloc de 'liste des véhicules automatique' pour Berline
    var listeCarburantPourBerline = document.querySelector("#liste_carburant_pour_berline");
    // Les élément du bloc de 'liste des véhicules automatique' pour Camion
    var listeCarburantPourCamion = document.querySelector("#liste_carburant_pour_camion");

    let valeurSelectionnee = seclectElmtTypeVehiculeAuto.options[seclectElmtTypeVehiculeAuto.selectedIndex].value;

    if (valeurSelectionnee == "berline") 
    {
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourBerline.style.display = 'block';
        //
        listeCarburantPourCamion.style.display = 'none';
    }
    else if (valeurSelectionnee == "camion")
    {
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        liste_carburant.style.display = 'block';
        listeCarburantPourCamion.style.display = 'block';
        //
        listeCarburantPourBerline.style.display = 'none';   
    }
    else {
        console.log("Type de véhicule auto choisie - valeur = ", valeurSelectionnee);
        listeCarburantPourCamion.style.display = 'none';
        listeCarburantPourBerline.style.display = 'none';   
        liste_carburant.style.display = 'none';
    }
});














    // liste_carburant.style.display = 'block';
    // liste_carburant_pour_moto.style.display = 'block';

    // var style_carburant_moto = getComputedStyle('#liste_carburant_pour_moto');
    // liste_carburant_pour_moto.style.display = 'bloc';