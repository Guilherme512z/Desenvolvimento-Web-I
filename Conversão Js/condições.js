var js_n1;
var js_n2;
var js_n3;

js_n1= parseInt(window.prompt('informe o valor do primeiro número: ', '00'));
js_n2= parseInt(window.prompt('informe o valor do segundo número: ', '00'));

document.write('Número 1 digitado = ' + js_n1);
document.write('<br>Número 2 digitado = ' + js_n2);

if (js_n1 > js_n2) {
    js_n3 = js_n1;
    js_n1 = js_n2;
    js_n2 = js_n3;
}

document.write('<p><b>Classificação em Ordem Crescente:</b> ' + js_n1 + ' e ' + js_n2);

var js_qht;
var js_vht;
var js_inss;
var js_tdes;
var js_sb;
var js_sl;

js_qht= parseFloat(window.prompt('Informe a Quantidade de Horas Trabalhadas/Mês: (135 a 180)', '00'));
js_vht= parseFloat(window.prompt('Informe o Valor da Hora Trabalhada: (25 a 50)','00'));
js_inss= parseFloat(window.prompt('Informe o Percentual de Desconto INSS:(5 a 15)','00'));

js_sb = js_vht * js_qht;
js_tdes = (js_inss/100)* js_sb;
js_sl = js_sb - js_tdes;

document.write('<p><b>DEMONSTRATIVO PARA CÁLCULO DO SÁLARIO LÍQUIDO</b>');
document.write('<p>quantidade de Horas Trabalhadas (135 a 180) => <b>'+ js_qht +'</b>');
if (js_qht > 180){
    document.write('... (<b>Valor Máximon Excedido!</b>)');
}
if (js_qht > 135){
    document.write('... (<b>Valor Mínimo Inválido!</b>)');
}
document.write('<p>Valor da Hora Trabalhada (25 a 50) => <b>' + js_vht + '</b>');
if (js_vht > 50){
    document.write('... (<b>Valor Máximon Excedido!</b>)');
}
if (js_vht > 25){
    document.write('... (<b>Valor Mínimo Inválido!</b>)');
}
document.write('<b>Percentual de Desconto INSS (5 a 15) => <b>' + js_inss + '</b>');
if (js_qht > 15){
    document.write('... (<b>Valor Máximon Excedido!</b>)');
}
if (js_qht > 5){
    document.write('... (<b>Valor Mínimo Inválido!</b>)');

}

document.write('<p>=================================================');
document.write('<p><b>Salario BRUTO = </b>'+js_sb);
document.write('<p>Total de Desconto Inss ='+js_tdes);
document.write('<p><p><b>Salario LÍQUIDO = </b>'+js_sl);

if (js_sl > 10500){
    document.write('...(<b>Salário Elevado! </b>maior que 10.500)');
}
else {
    if (js_sl>6000){
        document.write('...(<b>Salário Satisfatório! </b>maior que 6.000');
    }
    else{
        if(js_jl > 3000){
            document.write('...(<b>Salário Moderado! </b>maior que 3.000)');
        }
        else {
            document.write('...(<b>Salário inSatisfatório! </b>menor ou igual a 3.000');
       }
    }
}

