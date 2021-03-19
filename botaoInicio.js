let botao = document.querySelector('main#conteudo_principal button#btnTop');
//aparecer e desasparecer botão
window.onscroll = function(){
    scroll();
}

function scroll(){
    let btn = botao;
        if(document.documentElement.scrollTop > 200){
            btn.style.display = 'block';
        }
        else{
            btn.style.display = 'none';
        }
}

// mudar cor quando o mouse entra
botao.addEventListener('mouseenter', inside);
function inside(){
    let btn = botao;
        btn.style.backgroundColor = 'red';
        btn.style.color = 'black';
}
// voltar ao normal quando o mouse sai
botao.addEventListener('mouseout', outSide);
function outSide(){
    let btn = botao;
        btn.style.backgroundColor = 'rgb(31, 30, 30)';
        btn.style.color = 'white';
    }
//voltar ao topo
botao.addEventListener('click', backToTop);
function backToTop(){
    document.documentElement.scrollTop = 0;
}