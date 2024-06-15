document.getElementById('sim-btn').onclick = function() {
    alert("obrigado por admitir<3");
    
    location.href = "aaa.html";
};

document.getElementById('nao-btn').onclick = function() {
    desvia(this);
};

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
