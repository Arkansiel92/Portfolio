// définition des variables
const Name = document.querySelector(".name");
const program_document = document.querySelector(".program");
const btn_Arrow_index = document.querySelector(".arrow-bottom_index");
const btn_Arrow_project = document.querySelector(".arrow-bottom_project");
const projects = document.querySelector(".title_projet");
const Me = document.querySelector(".title_me");

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

// scroll index -> projets

btn_Arrow_index.addEventListener('click', () =>{
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

// fonction typewriter des titres

function title(document, txt){
    new Typewriter(document, {
        deleteSpeed: 150,
    })
    .typeString(txt)
    .start()
}
