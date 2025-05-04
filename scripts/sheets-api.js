// Configuração para conectar com Google Sheets
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('dashboard.html')) {
        loadUserScripts();
        setupControlButtons();
    }
});

async function loadUserScripts() {
    // Simulação - na implementação real, isso vai buscar no Google Sheets
    const scriptSelector = document.getElementById('scriptSelector');
    
    // Exemplo de scripts - substituir por chamada real à API
    const exampleScripts = [
        { id: '1', name: 'Estratégia Básica de Futebol' },
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
        
        // Simulação - na implementação real, chamará o Google Apps Script
        alert(`Script ${scriptId} iniciado! (Simulação)`);
        document.getElementById('activeScript').textContent = `Script ativo: ${document.getElementById('scriptSelector').options[document.getElementById('scriptSelector').selectedIndex].text}`;
    });
    
    stopBtn.addEventListener('click', async () => {
        // Simulação - na implementação real, chamará o Google Apps Script
        alert('STOP acionado! (Simulação)');
        document.getElementById('activeScript').textContent = 'Script ativo: Nenhum';
    });
}