let Pname = document.getElementById("name");
let created = document.getElementById("created");
let userLocation = document.getElementById("location");
let profilePic = document.getElementById("profilePic");
let status = document.getElementById("status");
let species = document.getElementById("species");

let choose = prompt("Escolha um numero de 1 a 826");

async function buscaDados() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${choose}`
    );
    const profileData = await response.json();
    Pname.innerText = profileData.name;
    created.innerText = `Created: ${profileData.created}`;
    userLocation.innerText = `Location: ${profileData.location.name}`;
    profilePic.src = profileData.image;
    status.innerText = `Status: ${profileData.status}`;
    species.innerText = `Species: ${profileData.species}`;
    console.log(profileData);
  } catch (e) {}
}

buscaDados();
