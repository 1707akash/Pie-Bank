

// import React, {useState} from 'react';
import Slider from '@mui/material/Slider';

const SliderInfo = ({min, max, value, symbol, title, setValue}) => {

    // const [sliderValue, setSliderValue] = useState(value);

    function valuetext(value) {
        return `${value}°C`;
      }

  return (
    <div>

        <div><p>{title}</p></div>
        <div><h2>{symbol}{value}</h2></div>
        <Slider
        aria-label="Temperature"
        defaultValue={value}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={min}
        max={max}
        onChange={(e)=>{
            setValue(e.target.value)
        }}
      />
      <div style={{
        display:'flex',
        justifyContent:'space-between'
      }}>
        <div><p>{symbol}{min}</p></div>
        <div><p>{symbol}{max}</p></div>
        
      </div>
    </div>
  )
}

export default SliderInfo