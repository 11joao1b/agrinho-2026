function simular(tipo) {
    const painelResultado = document.getElementById('resultado-simulacao');
    
    let mensagem = "";

    switch(tipo) {
        case 'agua':
            mensagem = "💧 <strong>Impacto:</strong> A irrigação inteligente reduz em até 40% o consumo de água na lavoura, garantindo que os lençóis freáticos continuem cheios para as próximas gerações.";
            break;
        case 'solo':
            mensagem = "🌱 <strong>Impacto:</strong> O plantio direto e a rotação de culturas evitam a erosão da terra e mantêm os nutrientes naturais do solo sem a necessidade de químicos pesados.";
            break;
        case 'carbono':
            mensagem = "🚜 <strong>Impacto:</strong> Tratores elétricos ou movidos a biocombustíveis, junto com o plantio de árvores nas fazendas (Integração Lavoura-Pecuária-Floresta), ajudam a zerar a emissão de gases poluentes!";
            break;
        default:
            mensagem = "Escolha uma prática para ver os resultados ambientais.";
    }

    // Insere o texto na tela com uma animação simples de transição
    painelResultado.innerHTML = mensagem;
    painelResultado.style.opacity = 0;
    setTimeout(() => {
        painelResultado.style.opacity = 1;
    }, 100);