import "./Figure3_3.css"
import React, {useState} from 'react'
import Figure_3_3_image from './images/Figure_3_3_image'
import Slider from "./components/Slider"
import Function from "./components/Function"
import { MathJax } from "better-react-mathjax"

const Figure3_3 = ({activation_type="ReLU"}) => {

    const [param1, set_param1] = useState(-0.2)
    const [param2, set_param2] = useState(0.4)
    const [param3, set_param3] = useState(-0.9)
    const [param4, set_param4] = useState(0.9)
    const [param5, set_param5] = useState(1.1)
    const [param6, set_param6] = useState(-0.7)
    const [param7, set_param7] = useState(-0.23)
    const [param8, set_param8] = useState(activation_type==="ReLU"? -1.3: -0.8)
    const [param9, set_param9] = useState(activation_type==="ReLU"? 1.3: 0.6)
    const [param10, set_param10] = useState(0.66)

    let activation = (x) => {return Math.max(x,0)} 
    if(activation_type==='sigmoid'){
        activation = (x) => {return 1./(1+Math.exp(-5 * x))}

    }
    if(activation_type==='Heaviside'){
        activation = (x) => {return x>0}

    }

    const formula1 = (x)=> { return param1 + param2 * x }
    const formula2 = (x)=> { return param3 + param4 * x }
    const formula3 = (x)=> { return param5 + param6 * x }
    const formula4 = (x)=> { return activation(formula1(x))}
    const formula5 = (x)=> { return activation(formula2(x)) }
    const formula6 = (x)=> { return activation(formula3(x)) }
    const formula7 = (x)=> { return param8 * formula4(x)}
    const formula8 = (x)=> { return param9 * formula5(x) }
    const formula9 = (x)=> { return param10 * formula6(x) }
    
    const formula10 = (x)=> { return param7 + param8 * formula4(x) + param9 * formula5(x)+ param10* formula6(x)}
    const axis = {min_x:0.0, max_x:2.0, min_y:-1.0, max_y:1.0}
    return (

        <div className="figure-3-3">
            <div className="main-image-3-3" >
                <Figure_3_3_image width_percent='100' />

                <div className = "function1-3-3">
                    <Function axis={axis} formula={formula1} color="#773c23"/>
                </div>
               <div className = "function2-3-3">
                    <Function axis={axis} formula={formula2} color="#629e9c"/>
                </div>
                <div className = "function3-3-3">
                    <Function axis={axis} formula={formula3} color="#424b4f"/>
                </div>
                <div className = "function4-3-3">
                    <Function axis={axis} formula={formula4} color="#773c23"/>
                </div>
                <div className = "function5-3-3">
                    <Function axis={axis} formula={formula5} color="#629e9c"/>
                </div>
                <div className = "function6-3-3">
                    <Function axis={axis} formula={formula6} color="#424b4f"/>
                </div>
                <div className = "function7-3-3">
                    <Function axis={axis} formula={formula7} color="#773c23"/>
                </div>
                <div className = "function8-3-3">
                    <Function axis={axis} formula={formula8} color="#629e9c"/>
                </div>
                <div className = "function9-3-3">
                    <Function axis={axis} formula={formula9} color="#424b4f"/>
                </div>
                <div className = "function10-3-3">
                    <Function axis={axis} formula={formula10} color="#476779"/>
                </div>

                <div className="slider-container1-3-3">
                    <Slider slider_position={param1} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param1(value)}} name='Intercept, $\theta_{10}$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container2-3-3">
                    <Slider slider_position={param2} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param2(value)}} name='Slope, $\theta_{11}$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container3-3-3">
                    <Slider slider_position={param3} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param3(value)}} name='Intercept, $\theta_{20}$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container4-3-3">
                    <Slider slider_position={param4} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param4(value)}} name='Slope, $\theta_{21}$ ' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container5-3-3">
                    <Slider slider_position={param5} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param5(value)}} name='Intercept, $\theta_{30}$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="slider-container6-3-3">
                    <Slider slider_position={param6} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param6(value)}} name='Slope, $\theta_{31}$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="slider-container7-3-3">
                    <Slider slider_position={param7} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param7(value)}} name='Intercept, $\phi_0$' fontsize={11} color="#476779"/>
                </div>

                <div className="slider-container8-3-3">
                    <Slider slider_position={param8} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param8(value)}} name='Slope, $\phi_1$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container9-3-3">
                    <Slider slider_position={param9} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param9(value)}} name='Slope, $\phi_2$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container10-3-3">
                    <Slider slider_position={param10} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param10(value)}} name='Slope, $\phi_3$' fontsize={11} color="#424b4f"/>
                </div> 
            </div>
            <div className="legend-3-3">
                <b>Figure 3.3 </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                Computation for function in figure 3.2a. (Top row) The input <span>{`$x$`}</span> is passed through three linear functions, 
                each with a different y-intercept <span>{`$\\theta_{\\bullet 0}$`}</span> and slope <span>{`$\\theta_{\\bullet 1}$`}</span>. 
                (Center row) Each line is passed through the {activation_type} activation function. 
                (Bottom row) The three resulting functions are then weighted (scaled) by <span>{`$\\phi_{1},\\phi_{2}$`}</span>, and  <span>{`$\\phi_{3}$`}</span>, respectively. 
                (Bottom right) Finally, the weighted functions are summed, and an offset  <span>{`$\\phi_{0}$`}</span> that controls the height is added. 
                </MathJax>
            </div>
            <div className="interact-3-3">
                Move the sliders to modify the parameters of the shallow network.
            </div>
        </div>
    )
}

export default Figure3_3