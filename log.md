looking at the oPentable website in google chrome dev tools React menu

need to really look through this again or whenever I am lost in this process look back to this

what am i trying to accomlish right now?

its really too easy for me to go off the rails and explore unrelevant stuff 

if i can seed data with just photos concerned 

<a> photos-gallery-link


resizer.otstatic.com

Mongoose.prototype.mongo
Type:
«property»
The node-mongodb-native driver Mongoose uses.

Mongoose.prototype.modelNames()
Returns:
«Array»
Returns an array of model names created on this instance of Mongoose.

Note:
Does not include names of models created using connection.model().

// var PhotoGallery = require('../database/photosModel');

// module.exports = function(app) {
//   app.get('/api/restaurant/:id/photos', (req, res) => {
//     const seedPhotos = [
//       { 
//         heroImage: `https://source.unsplash.com/collection/622212/1450x260/?sig=7`,
//         scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/?sig=$6`,
//         leftGalleryImage: `https://source.unsplash.com/collection/4239193/150x150/?sig=7`,
//         centerGalleryImage: `https://source.unsplash.com/collection/4239193/290x290/?sig=8`,
//         rightGalleryImage: `https://source.unsplash.com/collection/4239193/98x98/?sig=$9` 
//       },
//       { 
//         heroImage: `https://source.unsplash.com/collection/622212/1450x260/?sig=7`,
//         scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/?sig=$6`,
//         leftGalleryImage: `https://source.unsplash.com/collection/4239193/150x150/?sig=7`,
//         centerGalleryImage: `https://source.unsplash.com/collection/4239193/290x290/?sig=8`,
//         rightGalleryImage: `https://source.unsplash.com/collection/4239193/98x98/?sig=$9` 
//       },
//       { 
//         heroImage: `https://source.unsplash.com/collection/622212/1450x260/?sig=7`,
//         scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/?sig=$6`,
//         leftGalleryImage: `https://source.unsplash.com/collection/4239193/150x150/?sig=7`,
//         centerGalleryImage: `https://source.unsplash.com/collection/4239193/290x290/?sig=8`,
//         rightGalleryImage: `https://source.unsplash.com/collection/4239193/98x98/?sig=$9` 
//       },
//       { heroImage: `https://source.unsplash.com/collection/622212/1450x260/?sig=7`,
//         scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/?sig=$6`,
//         leftGalleryImage: `https://source.unsplash.com/collection/4239193/150x150/?sig=7`,
//         centerGalleryImage: `https://source.unsplash.com/collection/4239193/290x290/?sig=8`,
//         rightGalleryImage: `https://source.unsplash.com/collection/4239193/98x98/?sig=$9` 
//       },          
//       { 
//         heroImage: `https://source.unsplash.com/collection/622212/1450x260/?sig=7`,
//         scrollerImage: `https://source.unsplash.com/collection/4239193/400x400/?sig=$6`,
//         leftGalleryImage: `https://source.unsplash.com/collection/4239193/150x150/?sig=7`,
//         centerGalleryImage: `https://source.unsplash.com/collection/4239193/290x290/?sig=8`,
//         rightGalleryImage: `https://source.unsplash.com/collection/4239193/98x98/?sig=$9` 
//       }
//     ]
//     PhotoGallery.create(seedPhotos, (err, results) => {
//       res.send(results);
//     })
//   });
// }