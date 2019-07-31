const races = [
  {
    name: "Afegão",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/afegao-hound.jpg"
  },
  {
    name: "Affenpinscher",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/affenpinscher.jpg"
  },
  {
    name: "Airedale Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/airedale-terrier.jpg"
  },
  {
    name: "Akita Americano",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/akita_inu_dog_face_eyes_grass_hachiko_53104_1920x1080.jpg"
  },
  { name: "Akita" },
  {
    name: "American Staffordshire Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/american-staffordshire-terrier.jpg"
  },
  { name: "Barbet" },
  {
    name: "Basenji",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/basenji.jpg"
  },
  { name: "Basset Azul da Gasconha" },
  {
    name: "Beagle",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/beagle1.jpg"
  },
  {
    name: "Bearded Collie",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/bearded-collie.jpg"
  },
  {
    name: "Bichon Frisé",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/bichon-frise.jpg"
  },
  {
    name: "Border Collie",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/border-collie.jpg"
  },
  {
    name: "Border Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/border-terrier.jpg"
  },
  {
    name: "Borzoi",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/borzoi.jpg"
  },
  {
    name: "Boston Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/boston-terrier.jpg"
  },
  {
    name: "Boxer",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/boxer1.jpg"
  },
  {
    name: "Bull Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/bull-terrier.jpg"
  },
  {
    name: "Buldogue ou Bulldog Inglês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/buldogue-ingles.jpg"
  },
  {
    name: "Buldogue ou Bulldog Francês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/buldogue-frances.jpg"
  },
  {
    name: "Bullmastiff",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/bulmastife-banner.jpg"
  },
  {
    name: "Cairn Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/cairn-terrier.jpg"
  },
  {
    name: "Cane Corso",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cane-corso.jpg"
  },
  {
    name: "Cão de Água Português",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cao-de-agua-portugues.jpg"
  },
  {
    name: "Cão de Crista Chinês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cao-de-crista-chines.jpg"
  },
  {
    name: "Cavalier King Charles Spaniel",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cavalier-king-charles.jpg"
  },
  {
    name: "Chesapeake Bay Retriever",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/chesapeake-bay-retriever.jpg"
  },
  {
    name: "Chihuahua",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/chihuahua.jpg"
  },
  {
    name: "Chow Chow",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/chow-chow.jpg"
  },
  {
    name: "Cocker Spaniel Americano",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cocker-spaniel-americano.jpg"
  },
  {
    name: "Cocker Spaniel Inglês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/cocker-spaniel-ingles.jpg"
  },
  {
    name: "Collie",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/collie.jpg"
  },
  {
    name: "Coton de Tuléar",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/coton-de-tulear.jpg"
  },
  {
    name: "Dachshund",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/dachshund.jpg"
  },
  {
    name: "Dálmata",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/dalmata.jpg"
  },
  {
    name: "Dandie Dinmont Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/dandie-dinmont-terrier.jpg"
  },
  {
    name: "Doberman",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/doberman.jpg"
  },
  {
    name: "Dogue Alemão",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/dogue-alemao.jpg"
  },
  {
    name: "Dogo Argentino",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/dogo-argentino.jpg"
  },
  { name: "Dogue de Bordeaux" },
  {
    name: "Fila Brasileiro",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/fila-brasileiro.jpg"
  },
  {
    name: "Fox Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/fox-terrier.jpg"
  },
  {
    name: "Foxhound Inglês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/foxhound-ingles.jpg"
  },
  {
    name: "Galgo Escocês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/galgo-escoces.jpg"
  },
  {
    name: "Galgo Irlandês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/galgo-irlandes1.jpg"
  },
  {
    name: "Golden Retriever",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/golden-retriever.jpg"
  },
  { name: "Gos d’Atura" },
  {
    name: "Grande Boiadeiro Suiço",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/grande-boiadeiro-suico.jpg"
  },
  { name: "Greyhound" },
  {
    name: "Grifo da Bélgica",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/grifo-da-belgica.jpg"
  },
  {
    name: "Husky Siberiano",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/husky-siberiano.jpg"
  },
  {
    name: "Jack Russel Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/jack-russell-terrier.jpg"
  },
  {
    name: "King Charles",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/king-charles.jpg"
  },
  {
    name: "Komondor",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/komondor.jpg"
  },
  { name: "Kuvasz" },
  {
    name: "Labradoodle",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/labradoodle.jpg"
  },
  {
    name: "Labrador Retriever",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/labrador-retriever.jpg"
  },
  { name: "Laika" },
  {
    name: "Lakeland Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/lakeland-terrier.jpg"
  },
  {
    name: "Leonberger",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/leonberger.jpg"
  },
  { name: "Lhasa Apso" },
  {
    name: "Malamute-do-Alasca",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/malamute-do-alasca.jpg"
  },
  {
    name: "Maltês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/maltes.jpg"
  },
  {
    name: "Mastife",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/mastife.jpg"
  },
  { name: "Mastin dos Pirenéus" },
  {
    name: "Mastin do Tibete",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/mastim-tibetano.jpg"
  },
  { name: "Mastin Espanhol" },
  {
    name: "Mastín Napolitano",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/06/mastim-napolitano.jpg"
  },
  {
    name: "Norfolk Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/norfolk-terrier.jpg"
  },
  {
    name: "Norwich Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/norwich-terrier.jpg"
  },
  { name: "Old English Sheepdog (Bobtail)" },
  { name: "Papillon" },
  {
    name: "Pastor Alemão",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/pastor-alemao1.jpg"
  },
  {
    name: "Pastor Australiano",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/07/pastor-australiano.jpg"
  },
  {
    name: "Pastor Belga",
    picture:
      "https://www.petlove.com.br/images/breeds/197784/profile/original/pastor-belga-p.jpg?1532539870"
  },
  {
    name: "Pequinês",
    picture:
      "https://blog.finofaro.com.br/wp-content/uploads/2018/08/tudo-sobre-a-raca-de-cachorro-pequines3.jpg"
  },
  {
    name: "Pinscher miniatura",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/pinscher-miniatura.jpg"
  },
  {
    name: "Pitbull",
    picture:
      "https://image.cachorrogato.com.br/thumb/315/245/1/imagens/racas/imagem6.jpg"
  },
  {
    name: "Poodle",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/poodle.jpg"
  },
  {
    name: "Pointer",
    picture:
      "https://vetstreet-brightspot.s3.amazonaws.com/35/7b8bc0c82111e09b940050568d6ceb/file/Pointer-1-AP-645km081611.jpg"
  },
  {
    name: "Pug",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/pug.jpg"
  },
  { name: "Rhodesian Ridgeback" },
  {
    name: "Rottweiler",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/rottweiler.jpg"
  },
  {
    name: "Rough Collie",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/collie-9-500x443.jpg"
  },
  {
    name: "Saluki",
    picture:
      "https://meusanimais.com.br/wp-content/uploads/2017/11/galgo-saluki-2.jpg"
  },
  {
    name: "Samoieda",
    picture: "https://img.olx.com.br/images/17/173901008200995.jpg"
  },
  {
    name: "São Bernardo",
    picture: "https://img.olx.com.br/images/19/191903003296504.jpg"
  },
  {
    name: "Sem Raça Definida (SRD)",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/08/srd.jpg"
  },
  {
    name: "Scottish Terrier",
    picture:
      "https://t2.ea.ltmcdn.com/pt/razas/9/6/5/img_569_scottish-terrier_0_600.jpg"
  },
  {
    name: "Setter Irlandés",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2012/04/setter_irlandes_raca_portal_dog-4.jpg"
  },
  {
    name: "Shar-Pei",
    picture:
      "https://i2.wp.com/petcaramelo.com/wp-content/uploads/2018/07/shar-pei.jpg?fit=625%2C400&ssl=1"
  },
  {
    name: "Shiba Inu",
    picture:
      "https://www.petlove.com.br/images/breeds/197837/profile/original/shiba-p.jpg?1532540015"
  },
  {
    name: "Shih Tzu",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/09/shih-tzu.jpg"
  },
  {
    name: "SilKy Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/silky-terrier.jpg"
  },
  {
    name: "Skye Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/skye-terrier.jpg"
  },
  {
    name: "Smooth Collie",
    picture:
      "https://i.pinimg.com/originals/16/a9/f5/16a9f5f8861a871cdd9b4a76e5d79224.jpg"
  },
  {
    name: "Spitz Alemão",
    picture:
      "https://cdn.los-animales.org/fotos/281081_487675-spitz-alemao-branco.jpg"
  },
  {
    name: "Staffordshire Bull Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/05/sttafordshire-bull-terrier.jpg"
  },
  {
    name: "Tamaskan",
    picture: "https://meusanimais.com.br/wp-content/uploads/2017/12/lobos.jpg"
  },
  {
    name: "Teckel",
    picture:
      "https://tudosobrecachorros.com.br/wp-content/uploads/Dachshund.png"
  },
  {
    name: "Terra Nova",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/terra-nova-raca-cachorro.jpg"
  },
  {
    name: "Terrier Australiano",
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg/512px-Australian_Silky_Terrier_Alana_Of_Silky%27s_Dream.jpg"
  },
  {
    name: "Terrier Escocês",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/terrier-escoces-raca-cachorro.jpg"
  },
  {
    name: "Terrier Irlandês",
    picture:
      "https://3.bp.blogspot.com/_4EFxcO8n1FU/S9TYMEKg2ZI/AAAAAAAAAdY/-ggfvy328TQ/s1600/2008052135813_IMG_0708.jpg_w450.jpg"
  },
  {
    name: "Tosa",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/tosa-racas.jpg"
  },
  {
    name: "Weimaraner",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/weimaraner-cachorro-raca.jpg"
  },
  {
    name: "Welsh Corgi (Cardigan)",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/welsh-corgi-cardigan.jpg"
  },
  {
    name: "Welsh Corgi (Pembroke)",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/welsh-corgi-pembroke.jpg"
  },
  {
    name: "West Highland White Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/west-highland-white-terrier.jpg"
  },
  {
    name: "Whippet",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/whippet.jpg"
  },
  {
    name: "Xoloitzcuintli",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/04/Xoloitzcuintli-raca-cachorro.jpg"
  },
  {
    name: "Yorkshire Terrier",
    picture:
      "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2015/03/yorkshire-terrier.jpg"
  }
];

module.exports = races;
