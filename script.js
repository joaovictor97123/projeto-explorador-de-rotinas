// ========================
// FUNÇÃO DE CONCLUIR
// ========================
const botoes = document.querySelectorAll(".concluir");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.classList.toggle("concluido");
        botao.textContent = botao.classList.contains("concluido")
            ? "Feito ✔"
            : "Concluir";
    });
});


// ========================
// FUNÇÃO DE ARRASTAR E SOLTAR
// ========================
const lista = document.getElementById("lista");
let itemArrastando = null;

document.querySelectorAll(".atividade").forEach(item => {

    item.addEventListener("dragstart", () => {
        itemArrastando = item;
        setTimeout(() => item.classList.add("invisivel"), 0);
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("invisivel");
        itemArrastando = null;
    });

    item.addEventListener("dragover", e => {
        e.preventDefault();
        item.classList.add("drag-over");
    });

    item.addEventListener("dragleave", () => {
        item.classList.remove("drag-over");
    });

    item.addEventListener("drop", () => {
        item.classList.remove("drag-over");
        if (item !== itemArrastando) {
            lista.insertBefore(itemArrastando, item);
        }
    });
});