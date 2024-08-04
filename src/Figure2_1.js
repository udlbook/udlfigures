import "./Figure2_1.css"
import React, {useState} from 'react'
import Figure_2_1_image from './images/Figure_2_1_image'
import Slider from "./components/Slider"
import { MathJax } from "better-react-mathjax"

const Figure2_1 = () => {

    const [param1, set_param1] = useState(1.2)
    const [param2, set_param2] = useState(0.2)

    const lx1 = 0
    const lx2 = 1
    const ly1 = (2-param1) / 2.0
    const ly2 = ((2-param1)- 2 * param2 ) /2.0

    return (

        <div className="figure-2-1">
            <div className="main-image-2-1">
                <Figure_2_1_image width_percent='100'/>
            
                <div className="line-2-1">
                    <svg viewBox="0 0 1 1" >
                        <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke="#1f76D2" stroke-width="0.02" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div className="slider-container1-2-1">
                    <Slider slider_position={param1} min_val={0.0} max_val={2.0} sliderCallBack={(value)=>{set_param1(value)}} name='Intercept, $\phi_0$'/>
                </div>

                <div className="slider-container2-2-1">
                    <Slider slider_position={param2} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param2(value)}} name='Slope, $\phi_1$'/>
                </div>
            </div>
            <div className="legend-2-1">
                <MathJax inline dynamic hideUntilTypeset={"first"}>
                    <b>Figure 2.1</b> Linear regression model. For a given choice of parameters <span>{`$\\bfphi=[\\phi_{0},\\phi_{1}]$`}</span>, the model makes a prediction for the output (y-axis) based on the input (x-axis). Different choices for the y-intercept <span>{`$\\phi_{0}$`}</span> and the slope <span>{`$\\phi_{1}$`}</span> change these predictions. The linear regression model defines a family of input/output relations (lines) and the parameters determine the member of the family (the particular line).
                </MathJax>
            </div>
            <div className="interact-2-1">
                Adjust the sliders to see the effect of the parameters. 
            </div>
        </div>
    )
}

export default Figure2_1