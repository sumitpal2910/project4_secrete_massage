const linkInput = document.querySelector("#link-input")
const linkPanel = document.querySelector("#link-panel");
const form = document.querySelector("form")
const inputPanel = document.querySelector("#input-panel")

const {hash} = window.location;
const decoded = atob(hash.replace("#",""));
if(decoded){
	const msgPanel = document.querySelector("#massage-panel");
	msgPanel.classList.remove("hide");
	msgPanel.querySelector("h1").innerHTML = decoded;
	linkPanel.classList.add("hide");
	inputPanel.classList.add("hide");
}

form.addEventListener("submit", (event)=>{
	event.preventDefault();
	const input = document.querySelector("#massage")
	const encrypted = btoa(input.value);
	linkPanel.classList.remove("hide");
	document.querySelector("#input-panel").classList.add("hide");
	linkInput.value = `${window.location}#${encrypted}`;
	linkInput.select();
})
