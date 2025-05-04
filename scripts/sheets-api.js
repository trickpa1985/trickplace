// Configura��o para conectar com Google Sheets
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('dashboard.html')) {
        loadUserScripts();
        setupControlButtons();
    }
});

async function loadUserScripts() {
    // Simula��o - na implementa��o real, isso vai buscar no Google Sheets
    const scriptSelector = document.getElementById('scriptSelector');
    
    // Exemplo de scripts - substituir por chamada real � API
    const exampleScripts = [
        { id: '1', name: 'Estrat�gia B�sica de Futebol' },
        { id: '2', name: 'Sistema de Martingale (Risco)' },
        { id: '3', name: 'Green Book Tenis' }
    ];
    
    exampleScripts.forEach(script => {
        const option = document.createElement('option');
        option.value = script.id;
        option.textContent = script.name;
        scriptSelector.appendChild(option);
    });
}

function setupControlButtons() {
    const startBtn = document.getElementById('startScript');
    const stopBtn = document.getElementById('stopScript');
    
    startBtn.addEventListener('click', async () => {
        const scriptId = document.getElementById('scriptSelector').value;
        if(!scriptId) {
            alert('Selecione um script primeiro!');
            return;
        }
        
        // Simula��o - na implementa��o real, chamar� o Google Apps Script
        alert(`Script ${scriptId} iniciado! (Simula��o)`);
        document.getElementById('activeScript').textContent = `Script ativo: ${document.getElementById('scriptSelector').options[document.getElementById('scriptSelector').selectedIndex].text}`;
    });
    
    stopBtn.addEventListener('click', async () => {
        // Simula��o - na implementa��o real, chamar� o Google Apps Script
        alert('STOP acionado! (Simula��o)');
        document.getElementById('activeScript').textContent = 'Script ativo: Nenhum';
    });
}