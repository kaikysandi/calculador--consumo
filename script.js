const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
  precoCombustivel: document.querySelector("#precoCombustivel")
};

const elemento = {
  formulario: document.querySelector("form"),
  paragrafo: document.querySelector("p"),
};

const veiculo = {
  modelo: "Argo",
  consumoMedio: 8.5,
};

const viagem = {
  velocidadeMedia: "",
  duracao: "",
  percurso: "",
  consumoLitros: "",
  custoEmReais: "",
};

const combustivel = {
  tipo: "",
  precoEtanol: 3.899,
  precoGasolina: 5.999,
  preco_combustivel:""
};

input.combustivel.forEach((radio) => {
  radio.addEventListener("change", () => {
    combustivel.tipo = radio.value;
  });
});

elemento.formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  calcularConsumo();
});

function calcularConsumo() {
console.log(typeof input.precoCombustivel.value)
  //VARIAVEIS PARA CAPTURAR O VALOR DA HORA E MINUTO
  viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;

  // CAPTURA O VALOR DO CONSUMO MÉDIO DO VEÍCULO DIGITADO PELO USUÁRIO
  veiculo.consumoMedio = input.consumo.value


  // MÉTODO (SLICE) PARA CORTAR O SÍMBOLO DE ":" DA HORA E MINUTO, SEPARANDO EM VARIAVEIS PRÓPRIAS
  let hora = +viagem.duracao.slice(0, 2);
  let minuto = Number(viagem.duracao.slice(3));

  // FÓRMULA PARA CALCULAR A DISTÂNCIA PERCORRIDA PELO USUÁRIO
  viagem.percurso = (viagem.velocidadeMedia * ((hora *60 + minuto)/60)).toFixed(1)

//CONDICAO PARA REDUZIR O VALOR DA DISTANCIA TOTAL CASO O USUARIO UTILIZE
  if(combustivel.tipo.toLowerCase() ==='etanol'){
    viagem.percurso = (viagem.percurso - (viagem.percurso * 0,3) *100)
    console.log(viagem.percurso)
  }

  // MÉTODO (REPLACE) PARA SUBSTITUIR "." POR "," NA EXIBIÇÃO DA DISTÂNCIA TOTAL
  

  // CALCULO DO CONSUMO EM LITROS GASTOS NA VIAGEM
  viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio

  console.log(viagem.consumoLitros)

// CALCULO PARA SABER O CUSTO EM REAIS (R$) DE ACORDO COM O CONSUMO EM LITROS
combustivel.preco_combustivel = +input.precoCombustivel.value
if(combustivel.tipo.toLowerCase() === 'etanol'){
  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoEtanol
  // MÉTODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
  console.log(`Custo do Etanol: ${viagem.custoEmReais.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})}`)
} else{
  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina
    // MÉTODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
  console.log(`Custo da Gasolina: ${viagem.custoEmReais.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})}`)
}

elemento.paragrafo.innerText = `
O consumo em litros para uma viagem de ${viagem.percurso.replace('.',',')} km 
será de ${viagem.consumoLitros.toFixed(1).replace('.', ',')} litros 
e o valor será de ${viagem.custoEmReais.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})}`

}



