import Porshe from "../assets/Porshe.svg";
const Corolla =
  "https://garagem360.com.br/wp-content/uploads/2023/07/Toyota-Corolla-GLi-2023-2.jpg";
const Civic =
  "https://cdn.motor1.com/images/mgl/W81RXg/s3/honda-civic-sedan-e-hev-2023.webp";
const Focus =
  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/10/Ford-Focus_ST-2022-1600-02.jpg?quality=70&strip=info&w=1280&h=720&crop=1";
const Golf =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcHbnWd3OpnJW_1kpPe8Tm5RKQqNDMNqqTEB9VpAicWRKOvC2M_c3rzN9ZsVSGyg7pM8wfVQlYMqQ0Co8ya4qWdBRJM2jHMH44EeOuYjxOPc1-V2CEb0XrM6sGQKcEuiiFhag-It1JhqL-HzYMiWn7aEJNekYALmVHBdqxG92W0-981ZrZ9FFTTC1v/s600/VW-Golf-R-333-Limited-Edition%20%284%29.jpg";
const Onix =
  "https://quatrorodas.abril.com.br/wp-content/uploads/2022/12/01-galeria-onix-my23-e1671886742461.webp?w=1128&h=634&crop=1";
const Sentra =
  "https://www.automaistv.com.br/wp-content/uploads/2023/03/Novo-Nissan-Sentra-Exclusive-1_edited-990x594.jpg";
const Sandero =
  "https://www.autoo.com.br/fotos/2018/10/1280_960/renault_sandero_2019_1_18102018_10801_1280_960.jpg";
const HB20 =
  "https://carroesporteclube.com.br/wp-content/uploads/2023/01/Hyundai-HB20-2023-PRECOS-1024x586.jpg";
const Uno = "https://pbs.twimg.com/media/FRxk4LGXsAEml0Y?format=jpg&name=large";
const Lancer =
  "https://s2-autoesporte.glbimg.com/7zEgQqC1XoFgADHmNYotU3yLa6Q=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/b/r/biZvzdQ5WYjBFzKkJo4w/2015-10-05-mitsubishi-lancer-evolution-final-edition-10.jpg";
const Kia =
  "https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/06/08233212/kia_sportage_8269-1160x725.jpeg";
const peugeot =
  "https://img.olhardigital.com.br/wp-content/uploads/2023/07/Peugeot-e-208.jpg";
const A3 =
  "https://carroesporteclube.com.br/wp-content/uploads/2021/08/Audi-A3-2022-sportback.jpg";
const BMW =
  "https://s2-autoesporte.glbimg.com/PhZQ1K18IRL6Z3j3Be4G1frV-hw=/0x0:1366x1053/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/D/2/iaRVG2TfejbNovGDvq4Q/01.jpg";
const Mercedes =
  "https://quatrorodas.abril.com.br/wp-content/uploads/2021/02/Mercedes-Benz-Classe-C-2022-16.jpg?quality=70&strip=info";
export const mockList = [
  {
    imageURL: `${Corolla}`,
    Marca: "Toyota",
    Modelo: "Corolla",
    Combustível: "Gasolina",
    Cor: "Branco",
    Ano: 2018,
    Km: 35000,
    Preço: 45000,
  },
  {
    imageURL: `${Civic}`,
    Marca: "Honda",
    Modelo: "Civic",
    Combustível: "Etanol",
    Cor: "Preto",
    Ano: 2020,
    Km: 25000,
    Preço: 48000,
  },
  {
    imageURL: `${Focus}`,
    Marca: "Ford",
    Modelo: "Focus",
    Combustível: "Diesel",
    Cor: "Azul",
    Ano: 2016,
    Km: 55000,
    Preço: 35000,
  },
  {
    imageURL: `${Golf}`,
    Marca: "Volkswagen",
    Modelo: "Golf",
    Combustível: "Gasolina",
    Cor: "Prata",
    Ano: 2019,
    Km: 18000,
    Preço: 42000,
  },
  {
    imageURL: `${Onix}`,
    Marca: "Chevrolet",
    Modelo: "Onix",
    Combustível: "Etanol",
    Cor: "Vermelho",
    Ano: 2022,
    Km: 10000,
    Preço: 50000,
  },
  {
    imageURL: `${Onix}`,
    Marca: "Chevrolet",
    Modelo: "Onix",
    Combustível: "Etanol",
    Cor: "Vermelho",
    Ano: 2022,
    Km: 10000,
    Preço: 50000,
  },
  {
    imageURL: `${Onix}`,
    Marca: "Chevrolet",
    Modelo: "Onix",
    Combustível: "Etanol",
    Cor: "Vermelho",
    Ano: 2022,
    Km: 10000,
    Preço: 50000,
  },
  {
    imageURL: `${Sentra}`,
    Marca: "Nissan",
    Modelo: "Sentra",
    Combustível: "Gasolina",
    Cor: "Cinza",
    Ano: 2017,
    Km: 40000,
    Preço: 38000,
  },
  {
    imageURL: `${Sandero}`,
    Marca: "Renault",
    Modelo: "Sandero",
    Combustível: "Etanol",
    Cor: "Branco",
    Ano: 2021,
    Km: 15000,
    Preço: 42000,
  },
  {
    imageURL: `${HB20}`,
    Marca: "Hyundai",
    Modelo: "HB20",
    Combustível: "Gasolina",
    Cor: "Prata",
    Ano: 2020,
    Km: 22000,
    Preço: 39000,
  },
  {
    imageURL: `${Uno}`,
    Marca: "Fiat",
    Modelo: "Uno",
    Combustível: "Etanol",
    Cor: "Vermelho",
    Ano: 2015,
    Km: 60000,
    Preço: 28000,
  },
  {
    imageURL: `${Lancer}`,
    Marca: "Mitsubishi",
    Modelo: "Lancer",
    Combustível: "Gasolina",
    Cor: "Preto",
    Ano: 2014,
    Km: 70000,
    Preço: 32000,
  },
  {
    imageURL: `${Kia}`,
    Marca: "Kia",
    Modelo: "Sportage",
    Combustível: "Diesel",
    Cor: "Branco",
    Ano: 2019,
    Km: 28000,
    Preço: 47000,
  },
  {
    imageURL: `${peugeot}`,
    Marca: "Peugeot",
    Modelo: "208",
    Combustível: "Gasolina",
    Cor: "Azul",
    Ano: 2018,
    Km: 32000,
    Preço: 38000,
  },
  {
    imageURL: `${A3}`,
    Marca: "Audi",
    Modelo: "A3",
    Combustível: "Etanol",
    Cor: "Prata",
    Ano: 2022,
    Km: 15000,
    Preço: 52000,
  },
  {
    imageURL: `${BMW}`,
    Marca: "BMW",
    Modelo: "Série 3",
    Combustível: "Gasolina",
    Cor: "Preto",
    Ano: 2023,
    Km: 10000,
    Preço: 55000,
  },
  {
    imageURL: `${Mercedes}`,
    Marca: "Mercedes-Benz",
    Modelo: "C-Class",
    Combustível: "Diesel",
    Cor: "Cinza",
    Ano: 2021,
    Km: 18000,
    Preço: 52000,
  },
];
