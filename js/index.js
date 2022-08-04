let input_peso = document.querySelector('input#peso');
let input_altura = document.querySelector('input#altura');
let button_calcular = document.querySelector('button#calcular');
let p_resultado = document.querySelector('p#resultado');
let p_info = document.querySelector('p#info');
const lista = [
    [null, null, 'inválido'],               // 0
    [16, 16.99, 'muito abaixo do peso'],    // 1
    [17, 18.49, 'abaixo do peso'],          // 2
    [18.5, 24.99, 'peso normal'],           // 3
    [25, 29.99, 'acima do peso'],           // 4
    [30, 34.99, 'obesidade grau I'],        // 5
    [35, 40, 'obesidade grau II'],          // 6
    [40, null, 'obesidade grau III'],       // 7
];

button_calcular.addEventListener('click', () => {
    if (input_peso.value !== '' && input_altura.value !== '') {
        let imc = Number(input_peso.value) / Math.pow(Number(input_altura.value), 2) * 1.0;
        imc = parseFloat(String(imc)).toFixed(2);
        p_resultado.innerHTML = `O IMC desses dados é <strong>${String(imc).replace('.',',')}</strong>.`;
        let info = '';
        if (imc < lista[1][0]) {
            info = lista[0][2];
        } else if (imc > lista[7][0]) {
            info = lista[7][2];
        } else {
            lista.slice(1,6).forEach((item) => {
                if (imc >= item[0] && imc <= item[1]) {
                    info = item[2];
                }
            });
        }
        p_info.innerHTML = `Este valor considera que você está na faixa <strong>${info}</strong>.`
    } else {
        p_resultado.innerHTML = 'Preencha os dados acima.';
        p_info.innerHTML = 'Depois clique no botão calcular.';
    }
});