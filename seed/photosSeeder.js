const axios = require('axios');
const db = require('../database/index');

var generateRandomPhotoCountForRestaurant = function(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const photoCount = generateRandomPhotoCountForRestaurant(1, 25);

const heroImageWidth = 694;
const heroImageHeight = 230;

const leftTwoGalleryWidthDimension = 143.83;

const centerGalleryDimension = 289.69;

const rightSixGalleryDimension = 95.22;

const galleryScrollerDimension = 400;

const photoGalleryPaneWidth = 610
const photoGalleryPaneHeight = 270



const photosData = {
  heroImage: `https://source.unsplash.com/collection/2080789/${heroImageWidth}x${heroImageHeight}/sig=${5}`,
  scrollerImage: `https://source.unsplash.com/collection/2080789/${galleryScrollerDimension}x${galleryScrollerDimension}/sig=${6}`,
  leftGalleryImage: `https://source.unsplash.com/collection/2080789/${leftTwoGalleryWidthDimension}x${leftTwoGalleryWidthDimension}/?sig=${7}`,
  centerGalleryImage: `https://source.unsplash.com/collection/2080789/${centerGalleryDimension}x${centerGalleryDimension}/?sig=${8}`,
  rightGalleryImage: `https://source.unsplash.com/collection/2080789/${rightSixGalleryDimension}x${rightSixGalleryDimension}/?sig=${9}`
}



module.exports = photosData;










// // generate a random photosCount that represents the number of photos to generate for a particular restaurant

var generateRandomPhotoCountForRestaurant = function(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const photoCount = generateRandomPhotoCountForRestaurant(1, 25);




// const collectionId = 622212; // the collection id

// const heroImageWidth = 694;
// const heroImageHeight = 230;

// const leftTwoGalleryWidthDimension = 143.83;

// const centerGalleryDimension = 289.69;

// const rightSixGalleryDimension = 95.22;

// const galleryScrollerDimension = 400;

// const photoGalleryPaneWidth = 610
// const photoGalleryPaneHeight = 270



// `https://source.unsplash.com/collection/${x}/${heroImageWidth}x${heroImageHeight}/?sig=${generateRandomPhotoCountForRestaurant(1, collectionNumber)}`

// `https://source.unsplash.com/collection/${collectionId}/${leftTwoGalleryWidthDimension}x${leftTwoGalleryWidthDimension}/?sig=${generateRandomPhotoCountForRestaurant(1, collectionNumber)}`

// `https://source.unsplash.com/collection/${collectionId}/${centerGalleryDimension}x${centerGalleryDimension}/?sig=${generateRandomPhotoCountForRestaurant(1, collectionNumber)}`

// `https://source.unsplash.com/collection/${collectionId}/${rightSixGalleryDimension}x${rightSixGalleryDimension}/?sig=${generateRandomPhotoCountForRestaurant(1, collectionNumber)}`

// `https://source.unsplash.com/collection/${collectionId}/${galleryScrollerDimension}x${galleryScrollerDimension}/?sig=${generateRandomPhotoCountForRestaurant(1, collectionNumber)}`




`https://source.unsplash.com/collection/2080789/${heroImageWidth}x${heroImageHeight}/sig=${5}`

`https://source.unsplash.com/collection/2080789/400x400/sig=${6}`
// `https://source.unsplash.com/collection/4239193/400x400`

const collectionIds = [2455617, 622212, 3682877, 2311719, 622216, 1343727, 1275949, 2080789, 1116100, 3528803, 
  1481379, 349376, 1259559, 4239193, 2468201, 3398352, 271352, 386111, 622259, 256447,
  3154920, 3111461, 1914462, 1079354, 1404324, 552014, 274398, 2452030, 3408760, 622225,
  1698097, 2402084, 4238055, 1082503, 1832427, 629512, 2101433, 3525570, 146368, 3602088,
  1323510, 450386, 3477198, 2592950, 1032443, 2064563, 3421553, 3110695, 622230, 622235,
  3827445, 1677235, 1337496, 1583973, 1667370, 1362036, 1134320, 3716647, 1493444, 207854,
  524041, 1513443, 2499757, 1402396, 1746358, 3892160, 1294415, 1950148, 1073692, 398831,
  4252366, 1248537, 318410, 3297764, 3484384, 3547352, 3488389, 3757081, 1287795, 3369840,
  4308781, 940094, 622239, 2268099, 624547, 1649875, 2535685, 2324404, 1474556, 3750174,
  3474290, 3658043, 1772904, 2142429, 2142429, 1450905, 2164884, 4253528, 837392, 3098347
];





function getPhotos() {
  axios.get(`https://api.unsplash.com/search/photos?page=10&query=restaurants`, {
    baseURL: `https://api.unsplash.com/search/photos?page=10&query=restaurants`,
    headers: {
      'Accept-Version': 'v1',
      'Authorization': 
      'Client-ID 216bd408c1b2811738a6fa3f3e534ec60328f83037df125a7d897283196d99e5'
    }
  }).then(response => {
    console.log('inside the getphotos', response.data);
    // callback(null, response.data);
  }).catch(err => {
    console.log('inside getphotos', err);
    // callback(err);
  });
}

getPhotos();

module.exports = getPhotos;