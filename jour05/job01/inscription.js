// Récupération des éléments du DOM
const form = document.getElementById('registerForm');
const fields = {
    nom: document.getElementById('nom'),
    prenom: document.getElementById('prenom'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    adresse: document.getElementById('adresse'),
    codePostal: document.getElementById('codePostal')
};
const submitBtn = document.getElementById('submitBtn');
const strengthBar = document.getElementById('strengthBar');

// Validations asynchrones
function validateNom(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
            
            if (!value) {
                resolve({ valid: false, message: 'Le nom est requis' });
            } else if (!nameRegex.test(value)) {
                resolve({ valid: false, message: 'Nom invalide (2-50 caractères, lettres uniquement)' });
            } else {
                resolve({ valid: true });
            }
        }, 200);
    });
}

function validatePrenom(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
            
            if (!value) {
                resolve({ valid: false, message: 'Le prénom est requis' });
            } else if (!nameRegex.test(value)) {
                resolve({ valid: false, message: 'Prénom invalide (2-50 caractères, lettres uniquement)' });
            } else {
                resolve({ valid: true });
            }
        }, 200);
    });
}

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

function validatePassword(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (!value) {
                resolve({ valid: false, message: 'Le mot de passe est requis' });
            } else if (value.length < 8) {
                resolve({ valid: false, message: 'Minimum 8 caractères' });
            } else if (!/[A-Z]/.test(value)) {
                resolve({ valid: false, message: 'Doit contenir une majuscule' });
            } else if (!/[a-z]/.test(value)) {
                resolve({ valid: false, message: 'Doit contenir une minuscule' });
            } else if (!/[0-9]/.test(value)) {
                resolve({ valid: false, message: 'Doit contenir un chiffre' });
            } else if (!/[!@#$%^&*]/.test(value)) {
                resolve({ valid: false, message: 'Doit contenir un caractère spécial (!@#$%^&*)' });
            } else {
                resolve({ valid: true });
            }
        }, 300);
    });
}

function validateAdresse(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (!value) {
                resolve({ valid: false, message: 'L\'adresse est requise' });
            } else if (value.length < 5) {
                resolve({ valid: false, message: 'Adresse trop courte (min 5 caractères)' });
            } else if (value.length > 200) {
                resolve({ valid: false, message: 'Adresse trop longue (max 200 caractères)' });
            } else {
                resolve({ valid: true });
            }
        }, 200);
    });
}

function validateCodePostal(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            const cpRegex = /^[0-9]{5}$/;
            
            if (!value) {
                resolve({ valid: false, message: 'Le code postal est requis' });
            } else if (!cpRegex.test(value)) {
                resolve({ valid: false, message: 'Code postal invalide (5 chiffres)' });
            } else {
                resolve({ valid: true });
            }
        }, 200);
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

// Indicateur de force du mot de passe
function updatePasswordStrength(value) {
    let strength = 0;
    
    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[a-z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[!@#$%^&*]/.test(value)) strength++;
    
    strengthBar.className = 'password-strength-bar';
    
    if (strength <= 2) {
        strengthBar.classList.add('strength-weak');
    } else if (strength <= 4) {
        strengthBar.classList.add('strength-medium');
    } else {
        strengthBar.classList.add('strength-strong');
    }
}

// Validation en temps réel
fields.nom.addEventListener('blur', async () => {
    const result = await validateNom(fields.nom.value.trim());
    result.valid ? showSuccess(fields.nom) : showError(fields.nom, result.message);
});

fields.prenom.addEventListener('blur', async () => {
    const result = await validatePrenom(fields.prenom.value.trim());
    result.valid ? showSuccess(fields.prenom) : showError(fields.prenom, result.message);
});

fields.email.addEventListener('blur', async () => {
    const result = await validateEmail(fields.email.value.trim());
    result.valid ? showSuccess(fields.email) : showError(fields.email, result.message);
});

fields.password.addEventListener('input', () => {
    updatePasswordStrength(fields.password.value);
});

fields.password.addEventListener('blur', async () => {
    const result = await validatePassword(fields.password.value);
    result.valid ? showSuccess(fields.password) : showError(fields.password, result.message);
});

fields.adresse.addEventListener('blur', async () => {
    const result = await validateAdresse(fields.adresse.value.trim());
    result.valid ? showSuccess(fields.adresse) : showError(fields.adresse, result.message);
});

fields.codePostal.addEventListener('blur', async () => {
    const result = await validateCodePostal(fields.codePostal.value.trim());
    result.valid ? showSuccess(fields.codePostal) : showError(fields.codePostal, result.message);
});

// Validation à la soumission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    
    // Validation de tous les champs en parallèle
    const results = await Promise.all([
        validateNom(fields.nom.value.trim()),
        validatePrenom(fields.prenom.value.trim()),
        validateEmail(fields.email.value.trim()),
        validatePassword(fields.password.value),
        validateAdresse(fields.adresse.value.trim()),
        validateCodePostal(fields.codePostal.value.trim())
    ]);
    
    const fieldNames = ['nom', 'prenom', 'email', 'password', 'adresse', 'codePostal'];
    let allValid = true;
    
    // Affichage des résultats
    results.forEach((result, index) => {
        const field = fields[fieldNames[index]];
        if (result.valid) {
            showSuccess(field);
        } else {
            showError(field, result.message);
            allValid = false;
        }
    });
    
    // Si tout est valide
    if (allValid) {
        alert('✅ Inscription réussie!');
        form.reset();
        strengthBar.className = 'password-strength-bar';
        
        // Retirer les classes de succès
        Object.values(fields).forEach(field => {
            field.classList.remove('success');
        });
    }
    
    submitBtn.disabled = false;
});
