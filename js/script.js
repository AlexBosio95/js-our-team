const ourTeams = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        imgUrl: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        imgUrl: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        imgUrl: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        imgUrl: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        imgUrl: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        imgUrl: 'barbara-ramos-graphic-designer.jpg'
    },

]

const infoTeam = document.getElementById('info-team')

for (let i = 0; i < ourTeams.length; i++) {
    console.log(ourTeams[i].name)
    console.log(ourTeams[i].role)
    console.log(ourTeams[i].imgUrl)
    infoTeam.innerHTML += `<div class = "text-center mt-2"> 
    Name = ${ourTeams[i].name} 
    Role = ${ourTeams[i].role} 
    <img src="./img/${ourTeams[i].imgUrl}" alt="title ${ourTeams[i].imgUrl}"></div>`
}
