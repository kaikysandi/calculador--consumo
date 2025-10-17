const input = {
  combustivel: document.querySelectorAll(".inputCombustivel"),
  consumo: document.querySelector("#consumo"),
  velocidade: document.querySelector("#velocidade"),
  duracao: document.querySelector("#duracao"),
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

function calcularConsumo(){
  //VARIAVEIS PARA CAPTURAR O VALOR DA HORA E MINUTO
     viagem.duracao = input.duracao.value;
  viagem.velocidadeMedia = input.velocidade.value;
//CAPTURA O VALOR DO CONSUMO MEDIO DO VEICULO DIGITADO PELO USUARIO
veiculo.consumoMedio = input.consumo.value




//METODO (SLICE) PARA CORTAR O SIMBOLO DE ":" DA HORA E MINUTO, SEPARANDO EM VARIAVEIS
  let hora = +viagem.duracao.slice(0, 2);
  let minuto = Number(viagem.duracao.slice(3));

  //FORMULAPARA CALCULAR A DISTANCIA PERCORRIDA PELO USUARIO
  viagem.percurso = (viagem.velocidadeMedia * ((hora*60 + minuto)/60)).toFixed(1)
  // METODO (REPLACE) PARA SUBSTITUIR "." POR "," NA EXIBICAO DA DISTANCIA ATUAL
  console.log(viagem.percurso.replace(".",",") + ` KM`);


viagem.consumoLitros = viagem.percurso / veiculo.consumoMedio

console.log(viagem.consumoLitros)

//CALCULO PARA SABER O CUSTO EM REAIS (R$) DE ACORDO COM O CONSUMO EM LITROS

if(combustivel.tipo.toLowerCase() === "etanol"){
  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoEtanol
  //METODO PARA FORMATAR O RESULTADO COMO MOEDA (R$)
  console.log(`Custo do Etanol: ${viagem.custoEmReais.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })}`)
}else {
  viagem.custoEmReais = viagem.consumoLitros * combustivel.precoGasolina
  console.log(`Custo do Etanol: ${viagem.custoEmReais.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })}`)
}
elemento.paragrafo.innerText = `O consumo em litros para uma viagem de ${viagem.percurso.replace('.',',')} km séra de 
${viagem.consumoLitros.toFixed(1).replace('.',',')} litros e o valor sera de ${viagem.custoEmReais.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })}`


}
