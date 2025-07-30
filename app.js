'use strict';

const themes = ['light-theme', 'dark-theme', 'random-theme'];
let currentTheme = 0;

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    // Remove current theme
    document.body.classList.remove(themes[currentTheme]);

    // Update theme index
    currentTheme = (currentTheme + 1) % themes.length;

    // Apply new theme
    const newTheme = themes[currentTheme];
    document.body.classList.add(newTheme);

    // Update button text
    if (newTheme === 'light-theme') {
        this.textContent = "Dark";
    } else if (newTheme === 'dark-theme') {
        this.textContent = "Random";
    } else {
        this.textContent = "Light";
    }

    console.log('Current theme:', newTheme);
});

