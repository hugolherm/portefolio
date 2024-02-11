let inactiveBtn = document.getElementById("inactive");
let activeBtn = document.getElementById("active");

inactiveBtn.addEventListener('click', () => {
    activeBtn.id = 'inactive';
    inactiveBtn.id = 'active';

    inactiveBtn = document.getElementById("inactive");
    activeBtn = document.getElementById("active");
});


