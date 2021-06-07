var catalogOfBouquets = [
  {
    id:1,
    header:"Strawberry in chocolate dream",
    img:"./images/IMG_0274.jpg",
    alt:"strawberry",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"55$",
  },
  {
    id:2,
    header:"Fruits dream",
    img:"./images/fruitb.jpeg",
    alt:"fruits",
    name:"Bouquet made from fresh fruits (available combination with flowers,candies,nuts)",
    price:"50$",
  },
  {
    id:3,
    header:"Strawberry dream",
    img:"./images/IMG_0275.jpg",
    alt:"candies",
    name:"Bouquet made from candies, marshmellow, gummies (available different combinations)",
    price:"60$",
  },
  {
    id:4,
    header:"Sweet dream",
    img:"./images/stinch.jpg",
    alt:"strawberry",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"50$",
  },
  {
    id:5,
    header:"Miracle",
    img:"./images/IMG_0276.jpg",
    alt:"fruits",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"55$",
  },
  {
    id:6,
    header:"Bars and chocolates",
    img:"./images/candies.jpeg",
    alt:"candies",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"60$",
  },

  {
    id:7,
    header:"Tuta Fruta",
    img:"./images/IMG_0312.jpg",
    alt:"fruits",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"70$",
  },
  {
    id:8,
    header:"Red and Green",
    img:"./images/IMG_0313.jpg",
    alt:"candies",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"75$",
  },
  {
    id:9,
    header:"Cloud",
    img:"./images/IMG_0314.jpg",
    alt:"strawberry",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"80$",
  },
  {
    id:10,
    header:"Chocolate sea",
    img:"./images/IMG_0315.jpg",
    alt:"fruits",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"85$",
  },
  {
    id:11,
    header:"Mmmmm donuts",
    img:"./images/IMG_0316.jpg",
    alt:"candies",
    name:"Strawberry bouquet in belgian chocolate (different colors available)-25pcs",
    price:"90$",
  }
];

function catalogTemplate(item){
  return `
      <div class="item">
        <img src=${item.img} alt=${item.alt}>
        <h1 class="item-header">${item.header}</h2>
      <p class="item-title">${item.name}</p>
      <p class="item-price">${item.price}</p>
      <a class="item-btn" href="#">Buy</a>
  </div>
  `;
}


document.getElementById("items container").innerHTML = `
${catalogOfBouquets.map(catalogTemplate).join('')}
`;
