// 2. Create an html page with OPEN button and a modal box. 
// The modal box should have text and a CLOSE button. 
// The modal box is not displayed from the beginning. 
// It appears when clicking the OPEN button and disappears when clicking CLOSE.

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('idModal');
const closeBtn = document.getElementsByClassName("btn_exit")[0];  


openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display  
 = "none";
    }
}