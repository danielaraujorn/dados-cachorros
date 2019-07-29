const fs = require("fs");
const nanoid = require("nanoid");

const racas = require("./racas");
const { nomesMasculinos, nomesFemininos } = require("./nomes");
const donos = require("./donos");

const FEMEA = "fêmea";
const MACHO = "macho";
const QUANTIDADE = 20;

function gerarDataAleatoria(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

telefones = [];

gerarTelefone = () => {
  const inicio = Math.random() >= 0.5 ? 980000000 : 990000000;
  const telefone = Math.floor(inicio + Math.random() * 10000000);
  if (!!telefones[telefone]) {
    const novoTelefone = gerarTelefone();
    return novoTelefone;
  } else {
    telefones[telefone] = true;
    return telefone;
  }
};

gerarCachorro = () => {
  const dataDeNascimento = gerarDataAleatoria(new Date(2011, 0, 1), new Date());

  const infoPadrao = {
    id: nanoid(),
    raca: racas[Math.floor(Math.random() * racas.length)],
    dataDeNascimento,
    dono: {
      nome: donos[Math.floor(Math.random() * donos.length)],
      telefone: gerarTelefone()
    },
    dataDoUltimoAtendimento: gerarDataAleatoria(dataDeNascimento, new Date())
  };
  if (Math.random() >= 0.5)
    return {
      ...infoPadrao,
      genero: FEMEA,
      nome: nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)],
      castrado: false
    };
  else
    return {
      ...infoPadrao,
      genero: MACHO,
      nome: nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)],
      castrado: Math.random() >= 0.42
    };
};
fs.writeFile(
  "dogs.json",
  JSON.stringify(new Array(QUANTIDADE).fill(0).map(gerarCachorro)),
  function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  }
);

// console.log(racas[0], nomesFemininos[0], nomesMasculinos[0]);
