document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    
    window.addEventListener("scroll", function() {
       
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        // Changer la couleur du footer en fonction du pourcentage
       
        const hue = (scrollPercent / 100) * 120; // 0 = rouge, 120 = vert
        footer.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
    });
});
