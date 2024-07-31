import React from 'react';
 
function ImageComponent({ alt, width, height, style }) {
  const src = `C:\Users\v-pratarora\Desktop\pb_dev folder\Shopping-cart\shopping-cart-app\src\images\realistic-wireless-headphones-set_1284-20424.jpg`;
 `${total}`
  return (
<img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      style={style} 
    />
  );
}
 
ImageComponent.defaultProps = {
  alt: 'Example Image',
  width: '150',
  height: '150',
  style: {},
};
 
export default ImageComponent;

