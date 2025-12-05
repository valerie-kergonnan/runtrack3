document.addEventListener("DOMContentLoaded", function() {
    const keylogger = document.getElementById("keylogger");
    
    document.addEventListener("keypress", function(event) {
        
        const key = event.key;
        if (key.match(/^[a-zA-Z]$/)) {
            
            if (document.activeElement === keylogger) {
               
                keylogger.value += key + key;
               
                event.preventDefault();
            } else {
                
                keylogger.value += key;
            }
        }
    });
});