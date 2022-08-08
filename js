
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = ', infelizmente, abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Continue assim =)';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II. Cuidado!';
        }else {
            classificacao = 'com obesidade grau III. Procure um nutricionista de imediato!';
        }

        resultado.textContent = `${nome}, calculado! Seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Por favor, preencha todos os campos :)';
    }

}

calcular.addEventListener('click', imc);


