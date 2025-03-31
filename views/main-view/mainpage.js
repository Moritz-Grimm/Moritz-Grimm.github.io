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
            "Hey there! \nGlad you're here!"
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
    
    typeText: function (elementId, text, speed = 50) {
        return new Promise((resolve) => {
            const element = document.getElementById(elementId);
            element.innerHTML = '';
            
            const parts = text.split(/(<br>)/g);
            let currentIndex = 0;
            let totalDelay = 0;
            
            parts.forEach(part => {
                if (part === '<br>') {
                    setTimeout(() => {
                        element.innerHTML += '<br>';
                    }, speed * currentIndex);
                    currentIndex++;
                    totalDelay = speed * currentIndex;
                } else {
                    part.split('').forEach(char => {
                        setTimeout(() => {
                            element.innerHTML += char;
                        }, speed * currentIndex);
                        currentIndex++;
                        totalDelay = speed * currentIndex;
                    });
                }
            });
            
            setTimeout(() => {
                setTimeout(() => {
                    resolve();
                }, 300);
            }, totalDelay);
        });
    },

    // TODO: Implement twinkle stars animation
    generateStars: function () {
        const config = {
            starCount: 200,
            twinkleStarCount: 50,
            twinkleEnabled: true
        };
        const container = document.getElementById('starsContainer');
        container.innerHTML = '';
        
        for (let i = 0; i < config.starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Choose a random position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random size and opacity
            const size = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.8 + 0.2;
            
            star.style.left = x + 'vw';
            star.style.top = y + 'vh';
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.opacity = opacity;
            
            container.appendChild(star);
        }
        
        // Twinkle stars
        const stars = document.querySelectorAll('.star');
        const selectedStars = new Set();
        
        while (selectedStars.size < config.twinkleStarCount) {
            const randomIndex = Math.floor(Math.random() * stars.length);
            selectedStars.add(randomIndex);
        }
        
        selectedStars.forEach(index => {
            if (config.twinkleEnabled) {
                stars[index].classList.add('twinkle');
            }
        });
    },
    
    animateTexts: async function() {
        try {
            await this.typeText('welcomeText', this.chooseGreeting(), 45);
            
            await this.typeText('hero-text', "I'm Moritz, an aspiring developer from Germany.", 50);
            
        } catch (error) {
            console.error("Error while playing animation:", error);
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    App.generateStars();
    App.animateTexts();
});