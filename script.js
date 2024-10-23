const inputTerminal = document.getElementById("inputCMD");
const inputTerminalProcessed = document.getElementById("currentCMD");

inputTerminal.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        processCommand(inputTerminal.value)
        inputTerminal.value = "";
    }
});


function processCommand(command) {
    console.log(command)
}


function focusInput() {
    document.getElementById("inputCMD").focus()
}