document.getElementById("button").addEventListener("click", function () {

    fetch("expression.txt")
        .then(response => response.text())
        .then(data => {

            // création du <p>
            const p = document.createElement("p");
            p.textContent = data;

            // insertion dans la page
            document.body.appendChild  (p);
        })
        .catch(error => console.error("Erreur :", error));
});

