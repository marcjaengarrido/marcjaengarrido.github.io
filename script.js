const inputTerminal = document.getElementById("inputCMD");
const inputTerminalProcessed = document.getElementById("currentCMD");
const suggestionTerminal = document.getElementById("suggestionTerminal");

inputTerminal.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
})

inputTerminal.addEventListener("keyup", function(event) {
    // let commandsAvailable = ["help", "polla", "alex", "marc", "marcjaengarrido"];
    let selectedPrediction = commandOptions.find(x=>(inputTerminal.value.length > 0 ? (x.name).startsWith(inputTerminal.value) : false)) ?? (inputTerminal.value.length > 0 ? "" : commandOptions[0]);

    if (event.key === "Enter") {
        processCommand(inputTerminal.value)
        inputTerminal.value = "";
        selectedPrediction = commandOptions[0];
    } else if (event.key === "Tab") {
        inputTerminal.value = selectedPrediction.name;
    }
    
    inputTerminalProcessed.textContent = inputTerminal.value
    suggestionTerminal.textContent = (selectedPrediction.name).slice(inputTerminal.value.length)
});




function processCommand(command) {
    console.log(command)
}


function focusInput() {
    document.getElementById("inputCMD").focus()
}