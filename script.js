let url = "https://akabab.github.io/superhero-api/api/all.json"; 
let heroImage = document.getElementById("hero-avatar"); 
let heroTitle = document.getElementById("hero-title"); 
let heroFirstAppearance = document.getElementById("hero-first-appearance"); 
let heroDetails = document.getElementById("hero-details");
let generateButton = document.getElementById("generate-hero-btn"); 

async function fetchHero() { 
    try { 
        let response = await fetch(url); 
        let heroes = await response.json(); 
        let randomIndex = Math.floor(Math.random() * heroes.length); 
        let selectedHero = heroes[randomIndex]; 
        heroTitle.innerText = selectedHero.name;
        heroImage.setAttribute("src", selectedHero.images.md);
        heroFirstAppearance.innerText = `First Appearance: ${selectedHero.biography.firstAppearance || 'N/A'}`;
        heroDetails.innerHTML = `
            <li class="list-group-item"><strong>Full Name:</strong> ${selectedHero.biography.fullName || 'N/A'}</li>
            <li class="list-group-item"><strong>Place of Birth:</strong> ${selectedHero.biography.placeOfBirth || 'N/A'}</li> <!-- Добавляем место рождения -->
            <li class="list-group-item"><strong>Height:</strong> ${selectedHero.appearance.height.join(' / ') || 'N/A'}</li>
            <li class="list-group-item"><strong>Weight:</strong> ${selectedHero.appearance.weight.join(' / ') || 'N/A'}</li>
            <li class="list-group-item"><strong>Intelligence:</strong> ${selectedHero.powerstats.intelligence}</li>
            <li class="list-group-item"><strong>Strength:</strong> ${selectedHero.powerstats.strength}</li>
            <li class="list-group-item"><strong>Speed:</strong> ${selectedHero.powerstats.speed}</li>
            <li class="list-group-item"><strong>Durability:</strong> ${selectedHero.powerstats.durability}</li>
            <li class="list-group-item"><strong>Power:</strong> ${selectedHero.powerstats.power}</li>
            <li class="list-group-item"><strong>Combat:</strong> ${selectedHero.powerstats.combat}</li>
        `;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
generateButton.addEventListener("click", fetchHero);
document.addEventListener("DOMContentLoaded", fetchHero);
