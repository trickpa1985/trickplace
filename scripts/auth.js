// Simulação de autenticação - substituir por conexão real com Google Sheets
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupLink = document.getElementById('signup');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simulação de login - na implementação real, isso vai verificar no Google Sheets
            if(email && password) {
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
    
    if(signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('No momento, cadastros novos devem ser feitos manualmente. Entre em contato com o administrador.');
        });
    }
    
    // Logout
    const logoutBtn = document.getElementById('logout');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            window.location.href = 'index.html';
        });
    }
    
    // Verifica se está logado ao acessar dashboard
    if(window.location.pathname.includes('dashboard.html')) {
        if(!localStorage.getItem('userEmail')) {
            window.location.href = 'index.html';
        }
    }
});