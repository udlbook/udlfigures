import "./Figure3_8a.css"
import React, {useState} from 'react'
import Figure_3_8a_image from './images/Figure_3_8a_image'
import Slider from './components/Slider'
import ContourPlot from "./components/ContourPlot"
import { MathJax } from "better-react-mathjax"

const Figure3_8 = () => {
    
    const [param1, set_param1] = useState(0.03)
    const [param2, set_param2] = useState(0.2)
    const [param3, set_param3] = useState(0.3)

    const formula1 = (x,y)=> { return param1 + param2 * x + param3 * y }

    return (

        <div className="figure-3-8a">
            <div className="main-image-3-8a">
                <Figure_3_8a_image width_percent={100}/>
            
                <div className="contourplot-3-8a">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1} max_z={1} formula={formula1}/>
                </div>

                <div className="slider-container1_3_8a">
                    <Slider slider_position={param1} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param1(value)}} name='Intercept, $\phi_0$'/>
                </div>

                <div className="slider-container2_3_8a">
                    <Slider slider_position={param3} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param3(value)}} name='Slope, $\phi_1$'/>
                </div>

                <div className="slider-container3_3_8a">
                    <Slider slider_position={param2} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param2(value)}} name='Slope, $\phi_2$'/>
                </div>
            </div>
            <div className="legend-3-8a">
                <MathJax inline dynamic hideUntilTypeset={"first"}>
                    <b>Figure 3.8a</b> 2D Linear regression model. For a given choice of parameters <span>{`$\\bfphi=[\\phi_{0},\\phi_{1},\\phi_{2}]$`}</span>, the model makes a prediction for the output (given by color) based on the inputs. Different choices for the y-intercept <span>{`$\\phi_{0}$`}</span> and the slopes <span>{`$\\phi_{1},\\phi_{2}$`}</span> change these predictions. The linear regression model defines a family of input/output relations (planes) and the parameters determine the member of the family (the particular plane).
                </MathJax>
            </div>
            <div className="interact-3-8a">
                Adjust the sliders to see the effect of the parameters.  
            </div>
        </div>
    )
  
}

export default Figure3_8

