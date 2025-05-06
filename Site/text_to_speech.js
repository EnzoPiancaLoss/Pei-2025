function processar_input_text_to_speech(input){
    if ('speechSynthesis' in window) {
        // Cria uma nova instância de SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance();
        
        // Configura o texto a ser falado
        utterance.text = input;
        
        // Configura o idioma para português do Brasil
        utterance.lang = 'pt-BR';

        // Opcional: ajustar velocidade e tom
        utterance.rate = 1.0; // Velocidade normal
        utterance.pitch = 1.0; // Tom normal
        
        // Fala o texto
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Seu navegador não suporta a síntese de voz. Tente usar Chrome, Edge ou Firefox.');
    }
}
