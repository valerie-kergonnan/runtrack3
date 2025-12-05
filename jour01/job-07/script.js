function jourtravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à 0
    var annee = date.getFullYear();
    var jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi
    
    // Jours fériés de 2020 en France (format: "jour/mois")
    var joursFeries2020 = [
        "1/1",    // Jour de l'an
        "13/4",   // Lundi de Pâques
        "1/5",    // Fête du travail
        "8/5",    // Victoire 1945
        "21/5",   // Ascension
        "1/6",    // Lundi de Pentecôte
        "14/7",   // Fête nationale
        "15/8",   // Assomption
        "1/11",   // Toussaint
        "11/11",  // Armistice 1918
        "25/12"   // Noël
    ];
    
    var dateStr = jour + "/" + mois;
    
    // Vérifier si c'est un jour férié de 2020
    if (annee === 2020 && joursFeries2020.indexOf(dateStr) !== -1) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
    } 
    // Vérifier si c'est un week-end (0 = dimanche, 6 = samedi)
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } 
    // Sinon c'est un jour travaillé
    else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}

// Tests
jourtravaille(new Date(2020, 0, 1));   // 1er janvier 2020 - jour férié
jourtravaille(new Date(2020, 4, 1));   // 1er mai 2020 - jour férié
jourtravaille(new Date(2020, 6, 14));  // 14 juillet 2020 - jour férié
jourtravaille(new Date(2020, 0, 4));   // 4 janvier 2020 - samedi (week-end)
jourtravaille(new Date(2020, 0, 5));   // 5 janvier 2020 - dimanche (week-end)
jourtravaille(new Date(2020, 0, 6));   // 6 janvier 2020 - lundi (jour travaillé)