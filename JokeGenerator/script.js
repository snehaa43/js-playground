const joke = document.getElementById("joke");
const button = document.getElementById("btn");

button.addEventListener("click", getJoke);

async function getJoke(){

    joke.innerHTML = "Loading...";

    try{

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

        joke.innerHTML = `
            <strong>${data.setup}</strong><br><br>
            ${data.punchline}
        `;

    }
    catch(error){

        joke.innerHTML = "Failed to load joke.";

        console.log(error);

    }

}

