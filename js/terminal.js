function handleTerminalCommand(command) {
    const outputArea = document.getElementById('terminalOutput');

    switch(command.toLowerCase()) {
        case 'help':
            displayOutput('Available commands: help, clear, about');
            break;
        default:
            displayOutput('Command not found. Type "help" for a list of commands.');
    }
}

function displayOutput(output) {
    const outputArea = document.getElementById('terminalOutput');
    const newLine = document.createElement('p');
    newLine.textContent = '> ${message}';
    outputArea.appendChild(newLine);
}