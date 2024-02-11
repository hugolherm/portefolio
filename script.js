const personnalBtn = document.querySelector('#personnal-btn');
const universitaryBtn = document.querySelector('#universitary-btn');
const personnalProjects = document.querySelector('.personnal-projects-container');
const universitaryProjects = document.querySelector('.universitary-projects-container');

universitaryBtn.addEventListener('click', () => {
    if(universitaryBtn.classList.contains('toggle-active') === false){
        personnalBtn.classList.toggle('toggle-active')
        universitaryBtn.classList.toggle('toggle-active')
        universitaryProjects.classList.toggle('toggle-active')
        personnalProjects.classList.toggle('toggle-active')
    }
})

personnalBtn.addEventListener('click', () => {
    if(personnalBtn.classList.contains('toggle-active') === false){
        universitaryBtn.classList.toggle('toggle-active')
        personnalBtn.classList.toggle('toggle-active')
        universitaryProjects.classList.toggle('toggle-active')
        personnalProjects.classList.toggle('toggle-active')
    }
})