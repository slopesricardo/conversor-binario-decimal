const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const erro = document.querySelector("span");

limpar(formulario);


botao.addEventListener('click', (e) => {
    e.preventDefault();
    erro.textContent = "";
  
    const binarios = formulario.binario.value;

    if (binarios === '') {
        erro.textContent = "O campo binário não pode ser vazio!";
        limpar(formulario);
     
    }

    binarios.split('').map((char) => {
        if (char !== '0' && char !== '1') 
        erro.textContent = "Você deve digitar apenas 0 e 1";
        limpar(formulario);
        return;
    });

    var decimal = 0;

    for (var i = 0; i < binarios.length; i++) {
        let expoente = binarios.length - i - 1;
        let valor = (Math.pow(2, expoente)) * binarios[i];
        decimal = decimal + valor;
       
    }
    
    formulario.decimal.value = decimal;
  
});

const btnLimpar = document.querySelector("#limpar");

btnLimpar.ddEventListener('click', () => {
    
    limpar(formulario);
});

function limpar(formulario) {
    formulario.binario.value = "";
    formulario.decimal.value = "";
}