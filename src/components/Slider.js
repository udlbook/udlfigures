import './Slider.css'
import React, {useState, useRef, useEffect} from 'react'
import Draggable from 'react-draggable'
import { MathJax } from 'better-react-mathjax'

const Slider = ({slider_position, sliderCallBack, min_val, max_val, name, fontsize=13, color="#1f76D2"}  ) => {

    // Machinery to store width of slider in pixels
    const [width, setWidth] = useState(0)
    const [sliderValVisible, setSliderValVisible] = useState(false)
    const ref = useRef(null)
  
    const button_diameter = 25.0 * width / 215.0
    const actual_slider_position = (slider_position-min_val)/(max_val-min_val) * (width-button_diameter)
    const button_diameter_text = button_diameter+"px"
    const actual_slider_text = actual_slider_position-width*0.045 + "px"

    // Compute width of this component
    useEffect(() => {
      setWidth(ref.current.clientWidth)
    })

    // Convert position back to slider values and call external
    const sliderCallBackInternal=(e, position)=>{
        let slider_x = position.x
        slider_x = slider_x* (max_val-min_val) / (width-button_diameter) + min_val
        sliderCallBack(slider_x)
    }


    return (
        <div className="slider-and-labels">
            <div className = "slider-value-container" style={{height:button_diameter_text}}>
                {sliderValVisible && 
                    (<div className = "slider-value" style={{left:actual_slider_text,  fontSize:fontsize}}>
                    {slider_position.toFixed(2)}
                     </div>)
                }
            </div>
            <div className="slider-container" ref={ref}>
                <div className='slider-background' style={{height:button_diameter_text, width:width-button_diameter, left:button_diameter/2}}>
                    <svg width="100%" height="100%" viewBox={`${min_val} -1 ${max_val-min_val} 2`} preserveAspectRatio="none" >
                        <line x1={min_val} y1={-0.00} x2={max_val} y2={-0.00} stroke={color+"66"} stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1={min_val} y1={-0.00} x2={slider_position} y2={-0.00} stroke={color} stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className = "slider-button" >
                    <Draggable position={{x:actual_slider_position, y:0}} axis='x' bounds="parent" onDrag={sliderCallBackInternal}>
                        <div className="circle" style={{height:button_diameter_text, width:button_diameter_text}}     
                                onMouseEnter={() => setSliderValVisible(true)} onMouseLeave={() => setSliderValVisible(false)}>
                            <svg width="100%" height="100%" viewBox="-0.5 -0.5 1 1" >
                                <circle cx={0} cy={0} r={0.5} fill={color+"55"} />
                                <circle cx={0} cy={0} r={0.25} fill={color} />
                            </svg>
                        </div>
                    </Draggable>
                </div>
            </div>
            <div className = "min-max-container" style={{width:width-button_diameter, paddingTop: button_diameter, paddingLeft:button_diameter/2}}>
                        <div className = "min-value">
                            {/* {min_val} */}
                        </div>
                        <div className = "title" style={{fontSize:fontsize}}>
                            <MathJax inline dynamic hideUntilTypeset={"first"}>
                                {name}
                            </MathJax>
                        </div>
                        <div className = "max-value">
                            {/* {max_val} */}
                        </div>
                </div>

        </div>
    )
}

export default Slider