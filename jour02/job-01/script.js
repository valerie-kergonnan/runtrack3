function citation() {
    const citationElement = document.getElementById("citation");
    const contenu = citationElement.textContent;
    console.log(contenu);
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    button.addEventListener("click", citation);
});