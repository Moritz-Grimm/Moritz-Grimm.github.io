const App = {
    typeText: function(elementId, text) {
        const element = document.getElementById(elementId);
        element.textContent = ''; 
        text.split('').forEach((char, index) => {
            setTimeout(() => {
                element.textContent += char;
            }, 100 * index);
        });
    }
};

document.addEventListener("DOMContentLoaded", function() {
    App.typeText('welcomeText', 'Welcome to my website!');
})