const nao = document.getElementById("nao")
const sim = document.getElementById("sim")
var position = 0;
var isAnimating = false;
// isAnimating é usada para garantir que a animação no botão "Não" 
// não seja acionada novamente se já estiver em andamento. Isso evita 
// comportamentos inesperados e garante que a animação atual seja concluída 
// antes que uma nova seja iniciada.

nao.addEventListener("mouseover", animateNao);
nao.addEventListener("click", animateNao);

function animateNao(){
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        nao.style.transform = `translate(0px, ${position}px)`;
        nao.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
}

sim.addEventListener("click", function(){
    window.location.href='https://www.youtube.com/watch?v=81Abouxtkyc'
})