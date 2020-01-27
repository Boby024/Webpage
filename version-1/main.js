
let projekt = [
    {"titel":"Erstellung einer Buecherverwaltung",
    "beschreibung":" <div class=elementToggle> "+
        "                        Im Rahmen dieser Arbeit solle ich eine Webanwendung erstellen, die eine Bücherverwaltung realisiert." +
        "                Benutzer sollen sich an einem Online-System anmelden und über eine Weboberfläche einen Bücherkatalog einsehen,"+
        "                verwalten sowie Bücher ausleihen können. Darüber hinaus soll das System eine geeignete REST-Schnittstelle zur Verfügung stellen," +
        "                die ebenfalls einige dieser Funktionen anbietet. Eine Umsetzung dieser Anwendung erfordert sowohl eine Backend- als auch eine FrontendImplementierung.\n" +
        "                Darüber hinaus ist eine Datenbankanbindung erforderlich, damit die Daten persistent gespeichert werden können." +
        "                <p>So sieht des Projekts <a href="+"files/Buecherverwaltung.pdf"+" target=_blank>Bild</a> aus </p>" +
        "                <p>Hier das <a href="+"https://github.com/Boby024/Book-Management/tree/fullversion"+" title="+"Bücherverwaltung"+">Github-Repository (branch: fullversion)</a></p> </br>" +
        "                </p>" +
        "                    </div>"
    },
    {
        "titel":"Voice Queries in Product Search with Vague Conditions",
        "beschreibung":"hi"
    }
]

function toggleEl(selbst) {

    //let titel = data.slice(2);
    //console.log(selbst.textContent);
    //console.log(data);

    let data = selbst.innerText;
    let titel = data.slice(2);
    let beschreibung ;
    for(var i=0; i< projekt.length; i++){
        if (titel == projekt[i].titel){
            beschreibung = projekt[i].beschreibung;
            console.log(projekt[i].beschreibung);
        }

    }
    document.getElementById("elementT").innerHTML += beschreibung;
}
function tg() {

}
document.addEventListener("DOMContentLoaded",()=>{
    (function($) { $(document).ready(function(){
            $('#beschreibung-1, #beschreibung-2, #beschreibung-3').hide();
            $('.elementT').click(function(){
                $(this).next().slideToggle();
                $(this).toggleClass("afterToggle");
                return false;
                });
       }); })(jQuery);
});

/*
let projekt = [
    {"titel":"Erstellung einer Buecherverwaltung",
    "beschreibung":" <div class=elementToggle> "+
        "                        Im Rahmen dieser Arbeit solle ich eine Webanwendung erstellen, die eine Bücherverwaltung realisiert." +
        "                Benutzer sollen sich an einem Online-System anmelden und über eine Weboberfläche einen Bücherkatalog einsehen,"+
        "                verwalten sowie Bücher ausleihen können. Darüber hinaus soll das System eine geeignete REST-Schnittstelle zur Verfügung stellen," +
        "                die ebenfalls einige dieser Funktionen anbietet. Eine Umsetzung dieser Anwendung erfordert sowohl eine Backend- als auch eine FrontendImplementierung.\n" +
        "                Darüber hinaus ist eine Datenbankanbindung erforderlich, damit die Daten persistent gespeichert werden können." +
        "                <p>So sieht des Projekts <a href="+"files/Buecherverwaltung.pdf"+" target=_blank>Bild</a> aus </p>" +
        "                <p>Hier das <a href="+"https://github.com/Boby024/Book-Management/tree/fullversion"+" title="+"Bücherverwaltung"+">Github-Repository (branch: fullversion)</a></p> </br>" +
        "                </p>" +
        "                    </div>"
    },
    {
        "titel":"Voice Queries in Product Search with Vague Conditions",
        "beschreibung":"<div class=elementToggle>Mein Praxisprojekt, an den ich gerade arbeite ist verfügbar auf diesem\n" +
            "                    <a href=\"https://github.com/KalleNolte/Laptopshop\" title=\"project\"><strong> Github-Repository </strong></a>\n" +
            "                    Es geht um  eine Webseite, die die Suche schneller mit weniger Informationen vom User ermöglicht.\n" +
            "                    Das Projekt wird realisiert mit Angular für Front-end und Python für Backend.\n" +
            "                    <p>Auf diesem Projekt arbeite ich mehr im Front-End als im Backend</p>\n" +
            "           </div>"
    }
]


   let titel = document.getElementById("toggleBtn");
      console.log(selbst.innerText);

    let beschreibung ;
    for(var i=0; i<projekt.length; i++){
        if (titel === projekt[i].titel){
            beschreibung = projekt[i].beschreibung;
        }
    }
    document.getElementById("elementT").innerHTML += beschreibung;
}

if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
 */

