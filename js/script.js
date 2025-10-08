const motsFrancais = [
  "chat", "chien", "maison", "pomme", "livre", "voiture", "arbre", "fleur", "soleil", "lune",
  "ordinateur", "école", "table", "chaise", "porte", "fenêtre", "stylo", "cahier", "mer", "montagne",
  "village", "ville", "rue", "route", "pont", "forêt", "rivière", "lac", "plage", "île",
  "oiseau", "poisson", "cheval", "vache", "cochon", "mouton", "lion", "tigre", "éléphant", "singe",
  "papillon", "araignée", "serpent", "requin", "dauphin", "ours", "renard", "loup", "hibou", "chaton",
  "ballon", "vélo", "moto", "avion", "bateau", "train", "camion", "bus", "trottinette", "hélicoptère",
  "fromage", "pain", "lait", "eau", "jus", "gâteau", "chocolat", "sucre", "sel", "poivre",
  "ordinateur", "clavier", "souris", "écran", "imprimante", "microphone", "casque", "logiciel", "application", "internet",
  "amour", "amitie", "joie", "tristesse", "colère", "peur", "surprise", "déception", "espoir", "confiance",
  "philosophie", "psychologie", "sociologie", "astronomie", "biologie", "chimie", "physique", "mathématiques", "géographie", "histoire",
  "architecture", "peinture", "sculpture", "musique", "théâtre", "danse", "cinéma", "photographie", "poésie", "littérature",
  "algorithme", "variable", "fonction", "boucle", "condition", "objet", "tableau", "classe", "méthode", "prototype",
  "astronaute", "cosmonaute", "galaxie", "planète", "étoile", "comète", "astéroïde", "satellite", "univers", "trou noir",
  "développement", "programmation", "codage", "serveur", "réseau", "base de données", "interface", "application mobile", "site web", "logiciel",
  "aventure", "exploration", "voyage", "expédition", "quête", "mission", "découverte", "invention", "innovation", "création",
  "liberté", "égalité", "fraternité", "justice", "loi", "règle", "droit", "responsabilité", "éthique", "morale",
  "ordinateur portable", "tablette", "smartphone", "route nationale", "autoroute", "gare", "aéroport", "port", "station", "ville",
  "météo", "température", "pluie", "neige", "vent", "orage", "arc-en-ciel", "nuage", "soleil couchant", "éclipse",
  "robot", "drone", "imprimante 3D", "intelligence artificielle", "machine", "engin", "dispositif", "outil", "appareil", "mécanisme",
  "cuisine", "salade", "soupe", "pâtes", "riz", "viande", "poisson", "légumes", "fruit", "dessert",
  "montagne russe", "parc d'attractions", "manège", "spectacle", "cinéma", "théâtre", "concert", "festival", "exposition", "musée",
  "lettre", "journal", "magazine", "article", "roman", "poème", "conte", "biographie", "discours", "essai",
  "chaussure", "chaussette", "pantalon", "chemise", "robe", "jupe", "chapeau", "gants", "écharpe", "manteau",
  "santé", "médecin", "hôpital", "infirmier", "maladie", "remède", "traitement", "vaccin", "urgence", "consultation",
  "sport", "football", "basketball", "tennis", "natation", "cyclisme", "course", "gymnastique", "ski", "randonnée",
  "technologie", "innovation", "découverte", "science", "recherche", "expérience", "laboratoire", "données", "programme", "robotique",
  "énergie", "solaire", "éolienne", "hydraulique", "nucléaire", "fossile", "renouvelable", "consommation", "production", "efficacité",
  "psychologie", "sociologie", "philosophie", "anthropologie", "économie", "politique", "droit", "histoire", "géographie", "linguistique"
];

const phrasesDecourageantes = [
    "Vous allez pas y arriver.",
    "C'est trop dur pour vous.",
    "Vous feriez mieux d'abandonner.",
    "Ça ne servira à rien.",
    "Vous n'avez pas les compétences nécessaires.",
    "Laissez tomber, c'est inutile.",
    "Vous êtes pas fait pour ça.",
    "C'est peine perdue.",
    "Vous allez échouer, c'est sûr.",
    "Pourquoi essayer ? Vous allez juste décevoir."
];

let motAffiche = ""
let motEntre = ""
let scoreAffiche = 0
let motEntreId = ""
let timerAffiche = 5
let timerhtml = ""
let t = ""
let barwidth = 21
let bar = ""

function nombreHasard(nombre) {
    motAffiche = motsFrancais[Math.floor(Math.random()*nombre)]
    console.log(motAffiche)
}

document.addEventListener('keydown', (event) =>{
    if (event.key == "Enter") {
        gagneroupas()
    }
    prendreLeMot()
})

function gagneroupas() {
    prendreLeMot()
    verifierLeMot()
    resetValue()
    genererDecouragement()
}

function prendreLeMot() {
    motEntreId = document.getElementById("motmagic")
    motEntre = motEntreId.value
}

function score(points) {
    let divscore = document.getElementById("score")
    scoreAffiche += points
    html = `
        <h2>Votre Score est : ${scoreAffiche}</h2>
    `
    divscore.innerHTML = html
}

function resetScore(rest) {
    let divscore = document.getElementById("score")
    html = `
        <h2>Votre Score est : ${rest}</h2>
    `
    divscore.innerHTML = html
}


function ajouterLeMot(motAffiche) {
    let divlabel = document.getElementById("getmotmagic")
    let html = `
        <label for="motmagic">Le mot est : <span style="color : yellow;">${motAffiche}</span></label>
    `
    divlabel.innerHTML = html
}

function verifierLeMot() {
    if (motEntre == motAffiche){
        clearTimeout(t)
        timer()
        console.log("Bien joué")
        score(1)
        nombreHasard(motsFrancais.length)
        ajouterLeMot(motAffiche)
    }else{
        lancementDuJeu()
    }
}

function genererDecouragement() {
    let motEntreId = document.getElementById("motmagic")
    motEntreId.setAttribute("placeholder", phrasesDecourageantes[Math.floor(Math.random()*phrasesDecourageantes.length)])
}

function resetValue() {
    motEntreId.value = ""
}

function timer() {
    timerAffiche = 5
    barwidth = 21
    let timerID = document.getElementById("timer")
    t = setInterval(() => {
        let html = `
        <h3>${timerAffiche}</h3>
        `
        timerID.innerHTML = html
        console.log(timerAffiche --)
        barwidth = barwidth - 4
        bar.style.width = String(barwidth+"vw")
        console.log(String(barwidth+"vw"))
        if (timerAffiche == 0){
            clearTimeout(t)
            verifierTimer()
            barprogression()
        }
}, 1000);
}

function verifierTimer() {
    if (timerAffiche == 0){
        timer()
        gagneroupas()
    }
}

function barprogression() {
    barwidth = 21
    bar = document.getElementById("barprogression")
    bar.style.width = String(barwidth+"vw")
}

function lancementDuJeu() {
    barprogression()
    clearTimeout(t)
    timer()
    resetScore(0)
    nombreHasard(motsFrancais.length)
    ajouterLeMot(motAffiche)
}
lancementDuJeu()