// définition des variables
//index
const Name = document.querySelector(".name");
const program_document = document.querySelector(".program");
const btn_Arrow_index = document.querySelector(".arrow-bottom_index");
// liste index
const li_accueil = document.querySelector(".li_accueil");
const li_projets = document.querySelector(".li_projets");
const li_me = document.querySelector(".li_me");
// page projet
const img_projet = document.querySelector(".img_projet");
const btn_Arrow_project = document.querySelector(".arrow-bottom_project");
const projects = document.querySelector(".title_projet");
const ProgressBar = document.querySelector(".progressBar");
const title_miniprojet = document.querySelector(".title_miniprojet");
const timeProjet = document.querySelector(".timeProjet");
const teamProjet = document.querySelector(".teamProjet");
const fileProjet = document.querySelector(".fileProjet");
const btnGithub = document.querySelector(".btnGithub");
// page présentation de moi
const Me = document.querySelector(".title_me");


backgroundProjets = ["assets/Rpg_js.png","assets/Rpg_python.png"]

var projets = {
    projet1 : ["assets/Rpg_js.png","2 semaines","équipe de 4","CSS, Javascript"],
    projet2 : ["assets/Rpg_python.png","1 mois","équipe de 4","Python, Kivy"]
}


console.log(projets.projet1[0]);

i = 1
check = false

setInterval(() => {
    if (ProgressBar.offsetWidth <= 3 && check == false){
        img_projet.src = backgroundProjets[i];
        if (i == 0) {
            title_miniprojet.innerHTML = "Hécatombe";
            timeProjet.innerHTML = "2 semaines";
            teamProjet.innerHTML = "équipe de 4";
            fileProjet.innerHTML = "Javascript";
            btnGithub.addEventListener('click', () => {
                window.location.href = "https://www.google.fr/";
            })
        }
        else if (i == 1) {
            title_miniprojet.innerHTML = "RPGTic";
            timeProjet.innerHTML = "1 mois";
            teamProjet.innerHTML = "équipe de 4";
            fileProjet.innerHTML = "Python, Kivy";
            btnGithub.addEventListener('click', () => {
                window.location.href = "https://github.com/Arkansiel92/RPG-Tic";
            })
        }
        i++ 
        check = true;
        if (i == backgroundProjets.length){
            i = 0;
        }
    }
    else if (ProgressBar.offsetWidth > 150) {
        check = false;
    }

   //console.log(ProgressBar.offsetWidth);
 }, 60);



// TypeWriter de l'index
const NameWriter = new Typewriter(Name, {
    delay: 100
});

NameWriter
    .typeString("Joeil Mohali, développeur web")
    .start();


window.setTimeout(language, 5000);



function language(){
    new Typewriter(program_document, {
        deleteSpeed: 150,
        loop: true,
        
    })
    .typeString("Javascript")
    .pauseFor(1000)
    .deleteAll()
    .typeString("PHP")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Python")
    .pauseFor(1000)
    .deleteAll()
    .typeString("SQL")
    .pauseFor(1000)
    .start();
};

li_accueil.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// scroll index -> projets

btn_Arrow_index.addEventListener('click', () =>{
    window.scrollTo({
        top: 975,
        behavior: 'smooth'
    });
    title(projects, "Mes projets");
})

li_projets.addEventListener('click', () =>{
    window.scrollTo({
        top: 975,
        behavior: 'smooth'
    });
    title(projects, "Mes projets");
})



// scroll projets -> à propos de moi

btn_Arrow_project.addEventListener('click', () =>{
    window.scrollTo({
        top: 1975,
        behavior: 'smooth'
    });
    title(Me, "Et moi dans tout ça ?");
})

li_me.addEventListener('click', () =>{
    window.scrollTo({
        top: 1975,
        behavior: 'smooth'
    });
    title(Me, "Et moi dans tout ça ?");
})

// fonction typewriter des titres

function title(document, txt){
    new Typewriter(document, {
        deleteSpeed: 150,
    })
    .typeString(txt)
    .start()
}
