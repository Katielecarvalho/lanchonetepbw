document.addEventListener("DOMContentLoaded", () => {
    const pedidoBotoes = document.querySelectorAll(".pedido-btn");
    let total = 0;

    pedidoBotoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const nomeLanche = botao.getAttribute("data-nome");
            const precoLanche = parseFloat(botao.getAttribute("data-preco"));
            total += precoLanche;

            alert(`Você pediu: ${nomeLanche}\nPreço: R$ ${precoLanche.toFixed(2)}\nTotal até agora: R$ ${total.toFixed(2)}`);
            console.log(`Pedido confirmado: ${nomeLanche} - R$ ${precoLanche.toFixed(2)}`);
            console.log(`Total atual: R$ ${total.toFixed(2)}`);
        });
    });
});
