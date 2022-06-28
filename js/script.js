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
    
    infoTeam.innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./img/${ourTeams[i].imgUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${ourTeams[i].name}</h5>
          <p class="card-text">${ourTeams[i].role}</p>
        </div>
      </div>
    </div>
  </div>`
}


