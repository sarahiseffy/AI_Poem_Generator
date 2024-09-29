
function generatePoem(event) {
event.preventDefault();

/*let poemElement = document.querySelector("#poem1");
poemElement.innerHTML = `This is a sample poem.`;*/ //one solution 

new Typewriter("#poem1", {
  strings: "This is a sample poem.",
  autoStart: true,
  delay: 100,
});

}



let formElement = document.querySelector("#user-input");
formElement.addEventListener("submit", generatePoem);