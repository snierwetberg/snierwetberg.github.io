'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('random-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else if (className == "dark-theme") {
        this.textContent = "Random";
    } else {
        this.textContent= "Light";

    console.log('current class name: ' + className);
});
