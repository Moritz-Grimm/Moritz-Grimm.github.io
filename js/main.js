class WebsiteMode {
    constructor() {
        this.currentMode = 'normal';

    }

    switchToTerminal() {
        this.currentMode = 'terminal';
        this.updateDisplay();
    }

    switchToNormal() {
        this.currentMode = 'normal';
        thhis.updateDisplay();
    }

    updateDisplay() {
        const normalSelection = document.getElementById('normalMode');
        const terminalSelection = document.getElementById('terminalMode');

        if (this.currentMode === 'terminal') {
            normalSelection.classList.add('hidden');
            terminalSelection.classList.remove('hidden');

        } else {
            terminalSelection.classList.add('hidden');
            normalSelection.classList.remove('hidden');
        }
    }
}