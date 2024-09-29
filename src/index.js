
function displayPoem(response) {

/*let poemElement = document.querySelector("#poem");
poemElement.innerHTML = `This is a sample poem.`;*/ //one solution 

new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 10,
});
}

function generatePoem(event) {
event.preventDefault();

let userInputElement = document.querySelector("#userInput")
let apiKey = "47c53bba2097318c33196010f07cot74";
let context = "You are an AI that can generate beautiful poem in english first, with 4 line and break in 3 paragraphs using <p> and in any language the user will input and break each line with <br>."
let prompt = `Generate a poem about ${userInput.value}`
let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class = "blink"><b>Generating poem about ${userInput.value}...</b></div>`;

console.log("Generating poem..");
axios.get(apiUrl).then(displayPoem);

}


let formElement = document.querySelector("#user-input");
formElement.addEventListener("submit", generatePoem);