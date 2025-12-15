function fetchUsers() {
    fetch('users.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#usersTable tbody');
            tbody.innerHTML = '';
            
            if (data.error) {
                console.error('Erreur base de données:', data.error);
                tbody.innerHTML = '<tr><td colspan="4" style="color:red;text-align:center">Erreur: ' + data.error + '</td></tr>';
                return;
            }
            
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center">Aucun utilisateur trouvé</td></tr>';
                return;
            }
            
            data.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
            const tbody = document.querySelector('#usersTable tbody');
            tbody.innerHTML = '<tr><td colspan="4" style="color:red;text-align:center">Erreur de connexion</td></tr>';
        });
}

// Charger les utilisateurs au clic sur le bouton Update
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('updateBtn').addEventListener('click', fetchUsers);
    
    // Charger les utilisateurs au démarrage (optionnel)
    fetchUsers();
});
