// Sistema de Abas
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.btn-aba');
    const conteudos = document.querySelectorAll('.conteudo-aba');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const abaAtiva = this.getAttribute('data-aba');

            // Remove a classe ativo de todos os botões e conteúdos
            botoes.forEach(btn => btn.classList.remove('ativo'));
            conteudos.forEach(conteudo => conteudo.classList.remove('ativo'));

            // Adiciona a classe ativo ao botão clicado e seu conteúdo correspondente
            this.classList.add('ativo');
            document.querySelector(`.conteudo-aba[data-aba="${abaAtiva}"]`).classList.add('ativo');
        });
    });
});
