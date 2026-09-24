// Sistema de Abas
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.btn-aba');
    const conteudos = document.querySelectorAll('.conteudo-aba');

    function ativarAba(abaAlvo) {
        botoes.forEach(botao => {
            const ativo = botao.getAttribute('data-aba') === abaAlvo;
            botao.classList.toggle('ativo', ativo);
            botao.setAttribute('aria-selected', String(ativo));
        });

        conteudos.forEach(conteudo => {
            const ativo = conteudo.getAttribute('data-aba') === abaAlvo;
            conteudo.classList.toggle('ativo', ativo);
            conteudo.hidden = !ativo;
            conteudo.setAttribute('aria-hidden', String(!ativo));
        });

        const abaSelecionada = document.querySelector(`.conteudo-aba[data-aba="${abaAlvo}"]`);
        if (abaSelecionada) {
            abaSelecionada.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const abaAtiva = this.getAttribute('data-aba');
            ativarAba(abaAtiva);
        });
    });

    // Estado inicial
    conteudos.forEach(conteudo => {
        const ativo = conteudo.classList.contains('ativo');
        conteudo.hidden = !ativo;
        conteudo.setAttribute('aria-hidden', String(!ativo));
    });
});
