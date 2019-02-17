

// // var Menu = require('..database/menuModel');


// //function to generate number of submenus to add to fullmenu
// var submenuCountGenerator = function(min, max) {
//   return Math.floor((Math.random() * (max - min + 1)) + min);
// }

// //function to generate submenu titles 
// var generateSubmenuTitles = function(count, text) {

  
// }
// //function to generate item number range per submenu


// //function to generate a fullMenu


// console.log(submenuCountGenerator(0, 8));



const menuData = {
  menuId: "Eat the Rich",
  menuTitle: "full-menu",
  menuText: [ { plateId: "Spicy jalapeno bacon", description: "porchetta pancetta short loin biltong.", price: "$22" }, 
    { plateId: "Landjaeger biltong beef ribs", description: "Salami andouille doner ground round", price: "$32" },
    { plateId: "Corned beef hamburger fatback", description: "Jowl fatback rump tenderloin ball tip", price: "$20" },
    { drinks: [ { drinkId: "Chenin blanc 2008", price: "$8 per glass", liquor: false } ] }
  ],
  priceAvg: "$35"
};


module.exports = menuData;



  //       default: {
  //         url: '',
  //         width: 120,
  //         height: 90
  //       },
  //       medium: {
  //         url: '',
  //         width: 320,
  //         height: 180
  //       },
  //       high: {
  //         url: '',
  //         width: 480,
  //         height: 360

