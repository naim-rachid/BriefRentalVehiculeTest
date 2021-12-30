const seclectElmtBoiteVitesse = document.querySelector('#boite_vitesse');
// const moto = document.querySelector("#moto");

boite_vitesse.addEventListener('change', function() {
    // Les élément du bloc liste_carburant
    var liste_carburant = document.querySelector('#liste_carburant');
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
        liste_carburant.style.display = 'none';
    }
});

const seclectElmtType_vehicule_m = document.querySelector('#type_vehicule_m');

seclectElmtType_vehicule_m.addEventListener('change', function(){
    // Les élément du bloc de 'liste des véhicules manuelle'


    let valeurSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].value;
    let textSelectionnee = seclectElmtType_vehicule_m.options[seclectElmtType_vehicule_m.selectedIndex].text;

    if (valeurSelectionnee == "citadine") {
        
    }
    else if (valeurSelectionnee == "compact") {

    }
    else if (valeurSelectionnee == "utilitaire") {
        
    }
    else if (valeurSelectionnee == "engin_chantier") {
        
    }
});


















    // liste_carburant.style.display = 'block';
    // liste_carburant_pour_moto.style.display = 'block';

    // var style_carburant_moto = getComputedStyle('#liste_carburant_pour_moto');
    // liste_carburant_pour_moto.style.display = 'bloc';