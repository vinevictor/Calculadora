// Lista de Exercicios - Calculadora

var arrayResultados = [];
var indexArray = 0;

var repeat = true;
while (repeat) {
    var num1 = parseInt(prompt("Digite o Primeiro Numero:"));
    var num2 = parseInt(prompt("Digite o Segundo Numero:"));
    var escolha = parseInt(prompt("Digite 1 para Soma, 2 Para Subtração, 3 Para Multiplicação, 4 para Divisão."));
    console.clear();

    if (escolha == 1) {
        console.log("Soma = ", SomaDosNumeros());
        arrayResultados[indexArray] = SomaDosNumeros();
        indexArray++;
    } else if (escolha == 2) {
        console.log("Subtração = ", SubtracaoDosNumeros());
        arrayResultados[indexArray] = SubtracaoDosNumeros();
        indexArray++;
    } else if (escolha == 3) {
        console.log("Multiplicação = ", MultiplicacaoDosNumeros());
        arrayResultados[indexArray] = MultiplicacaoDosNumeros();
        indexArray++;
    } else if (escolha == 4) {
        console.log("Divisão = ", DivisaoDosNumeros());
        arrayResultados[indexArray] = DivisaoDosNumeros();
        indexArray++;
    };

    repeat = (prompt("Deseja fazer outra operação? s/n"));

    if (repeat == "n" || repeat == "N") {
        repeat = false;
        HistoricoResultados();
    };
};


function SomaDosNumeros() {
    var soma = num1 + num2;
    return soma;
};

function SubtracaoDosNumeros() {
    var sub = num1 - num2;
    return sub;
};

function MultiplicacaoDosNumeros() {
    var mult = num1 * num2;
    return mult;
};

function DivisaoDosNumeros() {
    var div = num1 / num2;
    return div;
};

function HistoricoResultados() {
    console.log("Historico de Resultados:")
    for (var i = 0; i < arrayResultados.length; i++) {
        console.log(arrayResultados[i])
    }
};