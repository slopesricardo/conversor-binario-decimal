const formulario = document.querySelector("form");
const btnConverter = document.querySelector("#converter");
const erro = document.querySelector("span");


btnConverter.addEventListener('click', (e) => {
    e.preventDefault();
    erro.textContent = "";
  
    const binarios = formulario.binario.value;

    let campoVazio = false;
    let valoresNaoPermitidos = false;

    if (binarios === '') campoVazio = true;

    binarios.split('').map((char) => {
        if (char !== '0' && char !== '1') 
        valoresNaoPermitidos = true;
    });

    if (campoVazio) {
        erro.textContent = "O campo binário não pode ser vazio!";
        formulario.decimal.value ='';
    } else if (valoresNaoPermitidos) {
        erro.textContent = "Você deve digitar apenas 0 e 1";
        formulario.decimal.value ='';
    } else {
        var decimal = 0;

        for (var i = 0; i < binarios.length; i++) {
            let expoente = binarios.length - i - 1;
            let valor = (Math.pow(2, expoente)) * binarios[i];
            decimal = decimal + valor;
        
        }
 
        formulario.decimal.value = decimal;
    }
  
});

const btnLimpar = document.querySelector("#limpar");

btnLimpar.addEventListener('click', (e) => {
    e.preventDefault();
    erro.textContent = '';
    formulario.binario.value = "";
    formulario.decimal.value = "";
});

