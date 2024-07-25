// OGGETTO TEAM

const team = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);
const mainCont = document.querySelector(".main-container");
const cardArray = []

// CREAZIONE CARD

for(let i = 0; i < team.length; i++){
    let card = document.createElement("div");
    card.classList.add("my-card");
    mainCont.append(card);
    cardArray.push(card);

    // INSERIMENTO IMMAGINI

    let img = document.createElement("img");
    img.classList.add("w-100");
    img.src = team[i].image;
    
    card.append(img)
}