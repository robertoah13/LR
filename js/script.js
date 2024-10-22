// script.js

// Função para exibir uma mensagem de boas-vindas no console após a página carregar
window.addEventListener('load', function() {
    console.log('Bem-vindo à LR Prótese Dental!');
});

// Exemplo de função para rolagem suave ao clicar nos links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = link.getAttribute('href').substring(0);
        if (targetID !== 'index.html') {
            window.location.href = targetID;
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
