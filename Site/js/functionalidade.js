function update_index(value) {
    parar_audio();
    page_index = (page_index + value + comidas_lista.length) % comidas_lista.length;
    console.log("Updating index ", page_index);
    speak_food();
}


function parar_audio() {
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

function speak_food() {
    console.log("Speaking food at index: ", comidas_lista[page_index]);

    let food = comidas_lista[page_index];
    let text = `Nome: ${food.getName()}. Preço: ${food.getPrice()} reais. Descrição: ${food.getDescription()}`;
    processar_input_text_to_speech(text);

}

function carregar_comidas() {
    fetch('comidas.json')
        .then(response => response.json())
        .then(data => {
            comidas_lista = data.map(item => new Comidas(item.name, item.price, item.description));
            page_index = 0;
            speak_food();
        })
        .catch(error => {
            console.error("Erro ao carregar comidas:", error);
            processar_input_text_to_speech("Erro ao carregar o cardápio.");
        });
}

function instance_food(Name, Price, Description) {
    comidas_lista.push(new Comidas(Name, Price, Description));
}

var comidas_lista = [];
var page_index = 0;

carregar_comidas();
// // Aqui você adiciona as instâncias de comida
// instance_food("Cachorro Quente", 10.00, "Saboroso cachorro quente com salsicha e molho especial.");
// instance_food("Batata Frita", 8.00, "Batatas fritas crocantes com sal.");
// instance_food("Salada Caesar", 12.00, "Salada fresca com alface, croutons e molho Caesar.");
// instance_food("Sushi", 30.00, "Delicioso sushi com peixe fresco e arroz temperado.");
// instance_food("Tacos", 20.00, "Tacos recheados com carne moída e vegetais frescos.");
// instance_food("Pizza", 25.00, "Deliciosa pizza de queijo com molho de tomate.");
// instance_food("Hambúrguer", 15.00, "Saboroso hambúrguer com queijo e alface.");


speak_food();