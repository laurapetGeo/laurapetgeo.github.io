// Nustato pradinį lango plotį, reikalingą antraštės elgesiui
var width = $(window).width();

// Funkcija, kuri vykdoma slenkant puslapį
window.onscroll = function(){
// Patikrina, ar ekrano plotis yra didesnis arba lygus 1000px (desktop režimas)
if ((width >= 1000)){
    // Jei slenkama žemyn (daugiau nei 80px nuo viršaus)
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background", "var(--white-background-color)"); // Pakeičia antraštės foną į baltą
        $("#header").css("color", "var(--primary-text-color)");     // Pakeičia antraštės teksto spalvą į tamsią
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)"); // Prideda šešėlį
        $("#header").css("padding","4vh 4vw"); // Sumažina antraštės užpildymą
        // Pakeičia navigacijos nuorodų pabraukimo spalvą užvedus pelę
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid var(--main-accent-color)"); // Akcento spalva
        },function(){
            $(this).css("border-bottom","2px solid transparent"); // Permatomas pabraukimas
        });
        // PRIDĖTA: Pakeisti logotipo spalvą, kad matytųsi ant balto fono
        $("#logo").css("color", "var(--main-accent-color)");
    }else{ // Jei slenkama atgal į viršų (mažiau nei 80px nuo viršaus)
        $("#header").css("background", "transparent"); // Antraštės fonas permatomas
        $("#header").css("color", "var(--white-background-color)");             // Antraštės tekstas baltas
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)"); // Pašalina šešėlį
        $("#header").css("padding","6vh 4vw"); // Atstato antraštės užpildymą
        // Atstato navigacijos nuorodų pabraukimo spalvą užvedus pelę
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid var(--white-background-color)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
        // PRIDĖTA: Atstatyti logotipo spalvą, kad matytųsi ant permatomo fono
        $("#logo").css("color", "var(--main-accent-color)"); // Laikome akcento spalvą
    }
}
}

// Funkcija, kuri padidina paveikslėlį iššokančiame lange
function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`); // Nustato fono paveikslėlį
    $("#magnify").css("display","flex"); // Parodo padidinimo langą
    $("#magnify").addClass("animated fadeIn"); // Prideda įplaukimo animaciją
    // Po 800ms pašalina animacijos klasę
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

// Funkcija, kuri uždaro paveikslėlio padidinimo langą
function closemagnify(){
    $("#magnify").addClass("animated fadeOut"); // Prideda išnykimo animaciją
    // Po 800ms paslepia langą ir pašalina animacijos klasę
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`); // Išvalo paveikslėlį
    },800);
}

// Funkcija, kuri paslepia įkrovimo animaciją po nurodyto laiko
setTimeout(function(){
    $("#loading").addClass("animated fadeOut"); // Prideda išnykimo animaciją įkrovimo ekranui
    // Po 800ms paslepia įkrovimo ekraną ir pašalina animacijos klasę
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650); // Palaukia 1.65 sekundės prieš pradedant paslėpti įkrovimo ekraną

// Kai dokumentas pilnai užkrautas, prideda sklandų slinkimą paspaudus ant nuorodų su # (hash)
$(document).ready(function(){
    $("a").on('click', function(event) {
      // Patikrina, ar nuoroda turi hash (#)
      if (this.hash !== "") {
        event.preventDefault(); // Sustabdo numatytąjį elgesį (tiesioginį šuolį)
        var hash = this.hash; // Gauna hash reikšmę (pvz., "#about-section")
        // Sklandžiai slenka į nurodytą sekciją
        $('body,html').animate({
        scrollTop: $(hash).offset().top // Slenka iki elemento viršaus
        }, 1800, function(){ // Animacija truks 1.8 sekundės
        window.location.hash = hash; // Pakeičia URL hash po slinkimo
       });
       }
     });
   });