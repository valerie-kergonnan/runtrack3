// Récupération des éléments du DOM
const form = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// Validation asynchrone de l'email
function validateEmail(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!value) {
                resolve({ valid: false, message: 'L\'email est requis' });
            } else if (!emailRegex.test(value)) {
                resolve({ valid: false, message: 'Format d\'email invalide' });
            } else if (value.length > 255) {
                resolve({ valid: false, message: 'Email trop long' });
            } else {
                resolve({ valid: true });
            }
        }, 300);
    });
}

// Validation asynchrone du mot de passe
function validatePassword(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (!value) {
                resolve({ valid: false, message: 'Le mot de passe est requis' });
            } else if (value.length < 6) {
                resolve({ valid: false, message: 'Minimum 6 caractères' });
            } else {
                resolve({ valid: true });
            }
        }, 300);
    });
}

// Affichage des erreurs
function showError(field, message) {
    const errorDiv = document.getElementById(field.id + 'Error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
    field.classList.add('error');
    field.classList.remove('success');
}

// Affichage du succès
function showSuccess(field) {
    const errorDiv = document.getElementById(field.id + 'Error');
    errorDiv.classList.remove('show');
    field.classList.remove('error');
    field.classList.add('success');
}

// Validation en temps réel lors de la perte de focus
emailField.addEventListener('blur', async () => {
    const result = await validateEmail(emailField.value.trim());
    if (result.valid) {
        showSuccess(emailField);
    } else {
        showError(emailField, result.message);
    }
});

passwordField.addEventListener('blur', async () => {
    const result = await validatePassword(passwordField.value);
    if (result.valid) {
        showSuccess(passwordField);
    } else {
        showError(passwordField, result.message);
    }
});

// Validation à la soumission du formulaire
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    
    // Validation de tous les champs
    const emailResult = await validateEmail(emailField.value.trim());
    const passwordResult = await validatePassword(passwordField.value);
    
    // Affichage des résultats
    if (emailResult.valid) {
        showSuccess(emailField);
    } else {
        showError(emailField, emailResult.message);
    }
    
    if (passwordResult.valid) {
        showSuccess(passwordField);
    } else {
        showError(passwordField, passwordResult.message);
    }
    
    // Si tout est valide
    if (emailResult.valid && passwordResult.valid) {
        alert('✅ Connexion réussie!');
        form.reset();
        emailField.classList.remove('success');
        passwordField.classList.remove('success');
    }
    
    submitBtn.disabled = false;
});
