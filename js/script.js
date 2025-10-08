const motsFrancais = [
  "Chat", "Chien", "Maison", "Pomme", "Livre", "Voiture", "Arbre", "Fleur", "Soleil", "Lune",
  "École", "Table", "Chaise", "Porte", "Fenêtre", "Stylo", "Cahier", "Mer", "Montagne", "Village",
  "Ville", "Rue", "Route", "Pont", "Forêt", "Rivière", "Lac", "Plage", "Île", "Oiseau",
  "Poisson", "Cheval", "Vache", "Cochon", "Mouton", "Lion", "Tigre", "Éléphant", "Singe", "Papillon",
  "Araignée", "Serpent", "Requin", "Dauphin", "Ours", "Renard", "Loup", "Hibou", "Chaton", "Ballon",
  "Vélo", "Moto", "Avion", "Bateau", "Train", "Camion", "Bus", "Trottinette", "Hélicoptère", "Fromage",
  "Pain", "Lait", "Eau", "Jus", "Gâteau", "Chocolat", "Sucre", "Sel", "Poivre", "Clavier",
  "Souris", "Écran", "Imprimante", "Casque", "Application", "Internet", "Amour", "Amitié", "Joie", "Tristesse",
  "Colère", "Peur", "Surprise", "Espoir", "Confiance", "Musique", "Danse", "Cinéma", "Théâtre", "Poésie",
  "Roman", "Conte", "Biographie", "Discours", "Chemise", "Robe", "Jupe", "Chapeau", "Gants", "Écharpe",
  "Médecin", "Hôpital", "Urgence", "Sport", "Football", "Basketball", "Tennis", "Natation", "Ski", "Randonnée",
  "Bouteille", "Coccinelle", "Caméléon", "Aiguille", "Horloge", "Miroir", "Cimetière", "Grenouille", "Cerise", "Carotte",
  "Écharpe", "Château", "Brouillard", "Fourchette", "Caniveau", "Vitrail", "Escalier", "Tambour", "Cheminée", "Écureuil",
  "Broussaille", "Aubergine", "Mandarine", "Calendrier", "Chrysalide", "Tornade", "Tempête", "Éclair", "Orage", "Cyclone",
  "Courage", "Beauté", "Liberté", "Fraternité", "Justice", "Égalité", "Responsabilité", "Éthique", "Morale", "Sagesse",
  "Innovation", "Création", "Découverte", "Invention", "Expédition", "Exploration", "Mission", "Aventure", "Voyage", "Quête",
  "Laboratoire", "Expérience", "Programme", "Algorithme", "Variable", "Boucle", "Condition", "Objet", "Classe", "Prototype",
  "Cosmonaute", "Astronaute", "Galaxie", "Planète", "Étoile", "Comète", "Astéroïde", "Satellite", "Univers", "Trou Noir",
  "Cuisine", "Salade", "Soupe", "Pâtes", "Riz", "Viande", "Légume", "Fruit", "Dessert", "Festival",
  "Exposition", "Concert", "Spectacle", "Parc", "Montagne Russe", "Musée", "Article", "Magazine", "Journal", "Lettre",
  "Chaussure", "Chaussette", "Pantalon", "Manteau", "Santé", "Maladie", "Traitement", "Vaccin", "Consultation", "Remède",
  "Anticonstitutionnellement", "Inintelligibilité", "Dysfonctionnement", "Photosynthèse", "Électromagnétisme", "Thermodynamique", "Cryptographie",
  "Archéologie", "Hydraulique", "Astrophysique", "Pharmacologie", "Méthodologie", "Étymologie", "Mythologie", "Technocratie", "Bureaucratie", "Pléonasme",
  "Onomatopée", "Parallélépipède", "Ornithorynque", "Chrysantheme", "Syllogisme", "Hypoténuse", "Quadrilatère", "Polynésie", "Antarctique", "Symétriquement",
  "Substantiellement", "Transcendantal", "Métamorphose", "Schizophrénie", "Psychothérapie", "Bioluminescence", "Mésopotamie", "Dénominateur", "Algébrique", "Hémorragie",
  "Photosensibilité", "Intergouvernemental", "Responsabilisation", "Institutionnalisation", "Pluridisciplinaire", "Incommensurable", "Indéfectiblement", "Invraisemblance", "Hétérogénéité", "Procrastination",
  "Synchronisation", "Disproportionné", "Caractéristique", "Météorologique", "Orthographique", "Philosophique", "Psychologique", "Sociologique", "Anthropologique", "Historiographique",
  "Épistémologique", "Grammaticalement", "Lexicographiquement", "Phonétiquement", "Électroencéphalogramme", "Antithétiquement", "Bibliothécaire", "Chlorophylle", "Dyslexique", "Interlocuteur",
  "Névralgique", "Orthophoniste", "Syllabaire", "Transcendance", "Ultrasonore", "Xylophoniste", "Zoologiste", "Péripétie", "Conjoncture", "Prophétie"
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

let motAleatoire = ""
let motEntre = ""
let chronometre = ""
let bar = ""
let motAffiche = ""

function genereUnMot() {
    let i = Math.floor(Math.random()* motsFrancais.length)
    motAleatoire = motsFrancais[i]
    console.log(motAleatoire)
}
function afficherLeMot(motAleatoire) {
    motAffiche = document.getElementById("getmotmagic")
    let html = `
    <label>Entrez le mot : <span style="color : yellow;">${motAleatoire}</span></label>
    `
    motAffiche.innerHTML = html
}

function barProgressionManage(barwidth) {
    bar = document.getElementById("barfieldset")
    let html = `
    <div id="barprogression" style="width: ${barwidth};"></div>
    `
    bar.innerHTML = html
}

function buttonStart() {
    button = document.getElementById("bouttoncommencer")
    let html = `<button onclick="lancerlejeu()">Commencer</button>`
    button.innerHTML = html
}

function cacherBoutton(button) {
    button.setAttribute("style", "visibility: hidden")
}

document.addEventListener('keydown', (event) =>{
    if (event.key == "Enter"){
        prendreLeMot()
        VerifierLeMot(motEntre, motAleatoire)
    }
})

function prendreLeMot() {
    motEntre = document.getElementById("motmagic")
    motEntre = motEntre.value
}

function VerifierLeMot(motEntre, motAleatoire) {
    if (motAleatoire == motEntre){
        prochainRound()
    }else{
        console.log("test")
        reset(button)
    }
}

function chrono() {
    let comptearebours = 5
    let barwidth = 22
    chronometre = setInterval(() => {
        comptearebours --
        afficherChrono(comptearebours)
        bar.style.width = String(barwidth+"vw")
        barwidth -= 7
        if (comptearebours == 0){
            afficherChrono(comptearebours)
            clearInterval(chronometre)
            bar.style.width = String("0vw")
            VerifierLeMot(motEntre, motAleatoire)
        }
    }, 1000);
}

function afficherChrono(comptearebours) {
    let timer = document.getElementById("timer")
    let html = `
    <label>${comptearebours}</label
    `
    timer.innerHTML = html
}

function reset(button) {
    motAffiche.innerHTML = ""
    timer.innerHTML = ""
    bar.innerHTML = ""
    button.setAttribute("style", "visibility : visible")
    clearInterval(chronometre)
}

function prochainRound(barwidth) {
    clearInterval(chronometre)
    barProgressionManage(barwidth)
    genereUnMot()
    afficherLeMot(motAleatoire)
    chrono()
}

function lancerlejeu() {
    cacherBoutton(button)
    genereUnMot()
    afficherLeMot(motAleatoire)
    chrono()
    barProgressionManage()
}
buttonStart()