const App = {
    chooseGreeting: function () {
        const greetings = [
            "Welcome to my website!",
            "Glad to see you here!",
            "Great to have you here!",
            "Hello and welcome!",
            "Thanks for stopping by!",
            "Happy to see you here!",
            "Hope you enjoy your visit!",
            "Welcome aboard!",
            "Hey there! \nGlad you’re here!"
        ];
        const morningGreetings = [
            "Good morning! \nWelcome to my website!",
            "A fresh new day! \nEnjoy your visit!"
        ]
        const afternoonGreetings = [
            "Good afternoon! \nGlad to see you here!",
            "Hope your day is going well! \nWelcome!",
            "Good afternoon! \nWelcome to my website!"
        ]
        const eveningGreetings = [
            "Good evening! \nGlad you stopped by!",
            "Welcome! \nHope you're having a relaxing evening!"
        ]
        const now = new Date();
        const hour = now.getHours();
        if (hour >= 5 && hour < 12) {
            greetings.push(...morningGreetings);
        } else if (hour >= 12 && hour < 18) {
            greetings.push(...afternoonGreetings);
        } else {
            greetings.push(...eveningGreetings);
        }
        const randomGreeting = Math.floor(Math.random() * greetings.length);
        return greetings[randomGreeting].replace(/\n/g, "<br>");
    },

    typeText: function (elementId, text) {
        const element = document.getElementById(elementId);
        element.innerHTML = '';
        
        const parts = text.split(/(<br>)/g);
        let currentIndex = 0;
        
        parts.forEach(part => {
            if (part === '<br>') {
                setTimeout(() => {
                    element.innerHTML += '<br>';
                }, 100 * currentIndex);
                currentIndex++;
            } else {
                part.split('').forEach(char => {
                    setTimeout(() => {
                        element.innerHTML += char;
                    }, 100 * currentIndex);
                    currentIndex++;
                });
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", function () {
    App.typeText('welcomeText', App.chooseGreeting());
})