// Configuração para conectar com Google Sheets
document.addEventListener('DOMContentLoaded', () => {
    if(window.location.pathname.includes('dashboard.html')) {
        loadUserScripts();
        setupControlButtons();
    }
});

const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbzEoFKxq1Dzv6Y74KaUVeXKpULUny_2ypvPpKJsis9xG2P-cOIeTiHE-FPxqS0O_v64PQ/exec";

async function loadUserScripts() {
    try {
        const response = await fetch(SHEETS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'get_scripts',
                sheet: 'Scripts'
            })
        });
        
        const data = await response.json();
        const scriptSelector = document.getElementById('scriptSelector');
        
        data.scripts.forEach(script => {
            const option = document.createElement('option');
            option.value = script.id;
            option.textContent = script.name;
            scriptSelector.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar scripts:', error);
    }
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