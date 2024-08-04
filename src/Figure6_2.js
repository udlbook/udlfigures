import "./Figure6_2.css"
import React, {useState} from 'react'
import Figure_6_2_image from './images/Figure_6_2_image'
import Slider from "./components/Slider"
import Function from "./components/Function"
import { MathJax } from "better-react-mathjax"

const Figure6_2 = () => {

    const [param1, set_param1] = useState(-5.0)
    const [param2, set_param2] = useState(25.0)

    const formula1 = (x)=> { return Math.sin(param1 + 0.06 * param2 * x) * Math.exp(-(param1 +0.06 * param2 * x)*(param1 +0.06 * param2 * x)/32.0)}

    const axis={min_x:-15.0, max_x:15.0, min_y:-1.0 , max_y: 1.0}
    return (

        <div className="figure-6-2">
            <div className="main-image-6-2">
                <Figure_6_2_image width_percent='100'/>

                <div className = "function1">
                    <Function axis={axis} formula={formula1} color="#629e9c"  no_segments={200} stroke_width={0.015}/>
                </div>

                <div className="slider-container1">
                    <Slider slider_position={param1} min_val={-15.0} max_val={15.0} sliderCallBack={(value)=>{set_param1(value)}} name='Position, $\phi_0$'/>
                </div>

                <div className="slider-container2">
                    <Slider slider_position={param2} min_val={0.001} max_val={50.0} sliderCallBack={(value)=>{set_param2(value)}} name='Inverse width, $\phi_1$'/>
                </div>
            </div>
            <div className="legend-6-2">
                <MathJax inline dynamic hideUntilTypeset={"first"}>
                    <b>Figure 6.2</b> Gabor model. For a given choice of parameters <span>{`$\\bfphi=[\\phi_{0},\\phi_{1}]$`}</span>, the model makes a prediction 
                    for the output (y-axis) based on the input (x-axis). The parameter <span>{`$\\phi_{0}$`}</span> controls the mean position and the parameter 
                    <span>{`$\\phi_{1}$`}</span> controls how narrow the function is. 
                </MathJax>
            </div>
            <div className="interact-6-2">
                Adjust the sliders to see the effect of the parameters. 
            </div>
        </div>
    )
}

export default Figure6_2