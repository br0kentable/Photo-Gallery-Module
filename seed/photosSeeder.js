import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    'Authorization': 
    'Client-ID 216bd408c1b2811738a6fa3f3e534ec60328f83037df125a7d897283196d99e5'
  }
})


// // generate a random photosCount that represents the number of photos to generate for a particular restaurant

// var generateRandomPhotoCountForRestaurant = function(min, max) {
//   return Math.floor((Math.random() * (max - min + 1)) + min);
// }



// console.log(generateRandomPhotoCountForRestaurant(0, 25));

// "urls": {
//   "raw": ""https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0Njg1fQ"",
//   "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
//   "regular": 
// "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
// "small": 
// "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
// "thumb": 
// "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
// };

"https://images.unsplash.com/photo-1525159831892-59d292d558b4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU0Njg1fQ"







//have function that makes api call 