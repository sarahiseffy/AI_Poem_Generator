
function displayPoem(response) {

/*let poemElement = document.querySelector("#poem1");
poemElement.innerHTML = `This is a sample poem.`;*/ //one solution 

new Typewriter("#poem1", {
  strings: response.data.answer,
  autoStart: true,
  delay: 10,
});
}

function generatePoem(event) {
event.preventDefault();

let apiKey = "47c53bba2097318c33196010f07cot74";
let context = "You are an AI that can generate beautiful and simple four-line english poems and break each line with <br>."
let prompt = `Generate a poem about ${instructionsInput.value}`
let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


console.log("Generating poem..");
axios.get(apiUrl).then(displayPoem);

}


let formElement = document.querySelector("#user-input");
formElement.addEventListener("submit", generatePoem);