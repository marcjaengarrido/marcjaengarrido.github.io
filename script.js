const inputTerminal = document.getElementById("inputCMD");
const inputTerminalProcessed = document.getElementById("currentCMD");
const suggestionTerminal = document.getElementById("suggestionTerminal");

inputTerminal.addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
})

inputTerminal.addEventListener("keyup", function(event) {
    let commandsAvailable = ["help", "polla", "alex", "marc", "marcjaengarrido"];
    let selectedPrediction = commandsAvailable.find(x=>(inputTerminal.value.length > 0 ? x.startsWith(inputTerminal.value) : false)) ?? (inputTerminal.value.length > 0 ? "" : "help");

    if (event.key === "Enter") {
        processCommand(inputTerminal.value)
        inputTerminal.value = "";
    } else if (event.key === "Tab") {
        inputTerminal.value = selectedPrediction;
    }
    
    inputTerminalProcessed.textContent = inputTerminal.value
    suggestionTerminal.textContent = selectedPrediction.slice(inputTerminal.value.length)
});




function processCommand(command) {
    console.log(command)
}


function focusInput() {
    document.getElementById("inputCMD").focus()
}