addEventListener("DOMContentLoaded", function(e) {
    const playerbutton = document.getElementById("play-button")
    playerbutton.addEventListener("click", function(){
        Play()
    })
})

function GenerateRandomParagraphe() {
    const typingTexts = [
        `La dactylographie est une compétence essentielle dans le monde numérique actuel. Elle permet d'augmenter considérablement la productivité, que ce soit pour le travail, les études ou les communications personnelles. Pratiquer régulièrement est la clé du succès.`,
        
        `La technologie évolue rapidement, n'est-ce pas ? Chaque jour apporte son lot de nouveautés ; des algorithmes plus performants, des gadgets plus petits et plus rapides, et des logiciels plus intuitifs. Il faut s'adapter, sinon on reste à la traîne.`,
        
        `Paris, la capitale de la France, attire des millions de touristes chaque année. La Tour Eiffel, le Louvre et les Champs-Élysées sont des lieux emblématiques. N'oubliez pas que la Seine traverse la ville, ajoutant à son charme historique.`,
            
        `En 2024, nous avons observé une croissance de 18,5% dans le secteur des jeux vidéo. L'année fiscale 2023 avait déjà atteint 12,9 milliards d'euros, soit une augmentation de 45% par rapport à 2020. Le prix du produit est de 99,99€ HT.`,
        
        `« La seule façon de faire du bon travail est d'aimer ce que vous faites. Si vous n'avez pas encore trouvé, continuez de chercher. Ne vous contentez jamais. » - Steve Jobs.`,
        
        `La vitesse compte. Le chat dort. Une simple idée. Le temps presse. Il fait beau. Tout est parfait. C'est fini.`,
    ];
    const listelength = typingTexts.length
    const index = Math.floor(Math.random()* listelength)
    return typingTexts[index]
}

function DisplayParagraphe(paragraphe) {
    const typingarea = document.getElementById("typing-area")
    typingarea.innerHTML = paragraphe
}

function Play() {
    TogglePlayPage()
    
    const paragraphe = GenerateRandomParagraphe()
    const htmlparagraphe = ConvertParagrapheToHtml(paragraphe)
    DisplayParagraphe(htmlparagraphe)
    addEventListenerTokeyboard(paragraphe)
}

function ConvertParagrapheToHtml(paragraphe) {
    var liste = ParagrapheSplited(paragraphe)

    for (let index = 0; index < liste.length; index++) {
        liste[index] = "<span class='remaining-text'>"+ liste[index] + "</span>"
    }
    let htmlparagraphe = ""
    for (let i = 0; i < liste.length; i++) {
        htmlparagraphe += liste[i]
    }
    return htmlparagraphe
}

function ParagrapheSplited(paragraphe) {
    var liste = paragraphe.split("")
    return liste
}

function addEventListenerTokeyboard(paragraphe) {
    const typingarea = document.getElementById("typing-area")
    const userinput = document.getElementById("userinput")
    userinput.addEventListener("keyup", function(e){
        for (let index = 0; index < typingarea.children.length; index++) {
            if (typingarea.children[index].classList.contains("correct")) {
                    typingarea.children[index].classList.replace("correct", "remaining-text")
                }else if(typingarea.children[index].classList.contains("incorrect")){
                    typingarea.children[index].classList.replace("incorrect", "remaining-text")
                }
        }
        for (let index = 0; index < userinput.value.length; index++) {
            typingarea.children[index].classList.add("remaining-text")
            if (userinput.value[index] == paragraphe[index]) {
                
                if (typingarea.children[index].classList.contains("incorrect")) {
                    typingarea.children[index].classList.replace("incorrect", "correct")
                }else{
                    typingarea.children[index].classList.replace("remaining-text", "correct")
                }
            }else{
                if (typingarea.children[index].classList.contains("correct")) {
                    typingarea.children[index].classList.replace("correct", "incorrect")
                }else{
                    typingarea.children[index].classList.replace("remaining-text", "incorrect")
                }
            }
            
        }
    })
}

function WritePerMinute() {
    
}

function TogglePlayPage() {
    const playpage = document.getElementById("play-page")
    if (playpage.style.display == "flex") {
        playpage.style.display = "none"
    }else{
        playpage.style.display = "flex"
        GenerateRandomParagraphe()
    }
}
