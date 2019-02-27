import React from 'React';

const heroImageStyles = {
  backgroundImage: "url(https://source.unsplash.com/collection/4239193/1450x280/?sig=${5})",
  maxWidth: "1055px",
  height: "230px",
  backgroundSize: "cover",
  backgroundPosition: "center"
}

export default HeroBanner = (props) => {
  console.log('inside the HeroBanner comp', props.heroImage)
  return (
    <div>
      <img src={props.heroImage} />
    </div>
  )
} 
