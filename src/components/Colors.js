import React from 'react'

import './Input.css';

const Colors = ({setColor}) => {

  const colors = ["#c43e4b","#e38690", "#f04732", "#f89b31", "#f9ea2c", "#c4e61b", "#5bb31f", "#1292d1", "#3074fc", "#4f4ea9", "#a45bb4", "#000000"];


  const rgbToHex = (rgb) => {
      
      rgb = rgb.slice(4, ).split(",");
      
      let r = parseInt(rgb[0]),
      g = parseInt(rgb[1]),
      b = parseInt(rgb[2]);
      
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }


  const getBackground = (e) => {
    const colorHex = rgbToHex(e.target.style.background);
    setColor(colorHex);
  }

  return (
    <div className="colors-container">
        {
          colors.map((color, index) => <div key={index} style={{background: color}} onClick={getBackground}></div>)
        }
		</div>
  )
}

export default Colors;
