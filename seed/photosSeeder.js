
const PhotoGallery = require('../database/photosModel').PhotoGallery;
const restaurantIds = require('../restaurant_ID.json');

/*create a PhotoGallery model instance for each id in the restaurantIds array

  * for the moment each url from unsplash will be grabbing a random photo from a collection I created 
  on the unsplash api
  * eventually will need to change set up to persist same photos per restaurant_id

  *the collection on unsplash has a total of 55 photos

  *the function below generates a random number less than 55 which will represent the total number of 
  photos a restaurant will show on the component for a specific restaurant 
  
  *for now the number will also represent the number of unsplash url strings will be stored in the photos array field
  for each model instance
*/

// this function generates a random amount of photos per restaurant
var generateRandomPhotoCount = function(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}



 //this function takes in a number and returns an array populated with the given number of unsplash urls 
var createPhotoCollection = function(totalPhotos, urlString) {
  var output = [];
  while(totalPhotos > 0) {
    output.push(urlString);
    totalPhotos -= 1;
  }
  return output;
}


// ** insert a PhotoGallery for each restaurantId into the database

var seedPhotos = function(restaurantIds) {
  for(var i = 0; i < restaurantIds.length; i++) {
    new PhotoGallery({
      id: restaurantIds[i].ID,
      restaurantName: restaurantIds[i].name,
      heroImage: `https://source.unsplash.com/collection/4239193/1450x260/`,
      scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/`,
      galleryLeft: `https://source.unsplash.com/collection/4239193/145x145/`,
      galleryCenter: `https://source.unsplash.com/collection/4239193/290x290/`,
      galleryRight: `https://source.unsplash.com/collection/4239193/98x98/`,
      photos: createPhotoCollection(generateRandomPhotoCount(1, 55), `https://source.unsplash.com/collection/4239193/400x400/`)
    }).save().then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}  


// console.log(createPhotoCollection(generateRandomPhotoCount(1, 55), `https://source.unsplash.com/collection/4239193/400x400/`));

  






seedPhotos(restaurantIds);


// `https://source.unsplash.com/collection/4239193/${heroImageWidth}x${heroImageHeight}/sig=${5}`

// `https://source.unsplash.com/collection/622212/400x400/sig=6`


// const 4239193s = [2455617, 622212, 3682877, 2311719, 622216, 1343727, 1275949, 4239193, 1116100, 3528803, 
//   1481379, 349376, 1259559, 4239193, 2468201, 3398352, 271352, 386111, 622259, 256447,
//   3154920, 3111461, 1914462, 1079354, 1404324, 552014, 274398, 2452030, 3408760, 622225,
//   1698097, 2402084, 4238055, 1082503, 1832427, 629512, 2101433, 3525570, 146368, 3602088,
//   1323510, 450386, 3477198, 2592950, 1032443, 2064563, 3421553, 3110695, 622230, 622235,
//   3827445, 1677235, 1337496, 1583973, 1667370, 1362036, 1134320, 3716647, 1493444, 207854,
//   524041, 1513443, 2499757, 1402396, 1746358, 3892160, 1294415, 1950148, 1073692, 398831,
//   4252366, 1248537, 318410, 3297764, 3484384, 3547352, 3488389, 3757081, 1287795, 3369840,
//   4308781, 940094, 622239, 2268099, 624547, 1649875, 2535685, 2324404, 1474556, 3750174,
//   3474290, 3658043, 1772904, 2142429, 2142429, 1450905, 2164884, 4253528, 837392, 3098347
// ];



