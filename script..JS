//Tobbyy.y

let topButton = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};
topButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); 
};