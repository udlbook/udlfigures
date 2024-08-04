import "./Figure3_8b.css"
import React, {useState} from 'react'
import Figure3_8b_image from './images/Figure_3_8b_image'
import Slider from "./components/Slider"
import ContourPlot from "./components/ContourPlot"
import Line from "./components/Line"
import { MathJax } from "better-react-mathjax"

const Figure3_8b = ({activation_type="ReLU"}) => {

    const [param1, set_param1] = useState(0.2)
    const [param2, set_param2] = useState(0.5)
    const [param3, set_param3] = useState(0.5)

    const [param4, set_param4] = useState(-0.3)
    const [param5, set_param5] = useState(-0.1)
    const [param6, set_param6] = useState(0.9)

    const [param7, set_param7] = useState(0.2)
    const [param8, set_param8] = useState(-0.7)
    const [param9, set_param9] = useState(0.2)

    const [param10, set_param10] = useState(0.4)
    const [param11, set_param11] = useState(-1)
    const [param12, set_param12] = useState(1.8)
    const [param13, set_param13] = useState(-0.5)
    

    let activation = (x) => {return Math.max(x,0)} 
    if(activation_type==='sigmoid'){
        activation = (x) => {return 1./(1+Math.exp(-5 * x))}
    }
    if(activation_type==='Heaviside'){
        activation = (x) => {return x>0 *1.0001}
    }

    const formula1 = (x,y)=> { return param1 + param2 * x + param3 * y}
    const formula2 = (x,y)=> { return param4 + param5 * x + param6 * y }
    const formula3 = (x,y)=> { return param7 + param8 * x + param9 * y }
    const formula4 = (x,y)=> { return activation(formula1(x,y))}
    const formula5 = (x,y)=> { return activation(formula2(x,y)) }
    const formula6 = (x,y)=> { return activation(formula3(x,y)) }
    const formula7 = (x,y)=> { return param11 * formula4(x,y)}
    const formula8 = (x,y)=> { return param12 * formula5(x,y) }
    const formula9 = (x,y)=> { return param13 * formula6(x,y) }
    const formula10 = (x,y)=> { return param10 + param11 * formula4(x,y) + param12 * formula5(x,y)+ param13* formula6(x,y)}

    const compute_line=(intercept, x_slope, y_slope) => { 
        const line = {lx1:-1, lx2:1, ly1:-1,ly2:1}
        if(Math.abs(x_slope) > Math.abs(y_slope)){
            line.lx1 = (-intercept - x_slope * -1)/y_slope
            line.lx2 = (-intercept - x_slope * 1)/y_slope
        }
        else{
            line.ly1 = (-intercept - y_slope * -1)/x_slope
            line.ly2 = (-intercept - y_slope * 1)/x_slope
        }
        return line
    }

    const line1 = compute_line(param1,param2,param3)
    const line2 = compute_line(param4,param5,param6)
    const line3 = compute_line(param7,param8,param9)
    const axis = {min_x:-1, max_x:1, min_y:-1, max_y:1}

    return (

        <div className="figure-3-8b">
            <div className="main-image-3-8b">
                <Figure3_8b_image width_percent='100'/>
                
                
                <div className="slider-container18_b">
                    <Slider slider_position={param1} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param1(value)}} name='Intercept, $\theta_{10}$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container28_b">
                    <Slider slider_position={param2} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param2(value)}} name='Slope, $\theta_{11}$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container38_b">
                    <Slider slider_position={param3} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param3(value)}} name='Slope, $\theta_{12}$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container48_b">
                    <Slider slider_position={param4} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param4(value)}} name='Intercept, $\theta_{20}$ ' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container58_b">
                    <Slider slider_position={param5} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param5(value)}} name='Slope, $\theta_{21}$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container68_b">
                    <Slider slider_position={param6} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param6(value)}} name='Slope, $\theta_{22}$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container78_b">
                    <Slider slider_position={param7} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param7(value)}} name='Intercept, $\theta_{30}$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="slider-container88_b">
                    <Slider slider_position={param8} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param8(value)}} name='Slope, $\theta_{31}$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="slider-container98_b">
                    <Slider slider_position={param9} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param9(value)}} name='Slope, $\theta_{32}$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="slider-container108_b">
                    <Slider slider_position={param10} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param10(value)}} name='Intercept, $\phi_0$' fontsize={11} color="#476779"/>
                </div>

                <div className="slider-container118_b">
                    <Slider slider_position={param11} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param11(value)}} name='Slope, $\phi_1$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container128_b">
                    <Slider slider_position={param12} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param12(value)}} name='Slope, $\phi_2$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container138_b">
                    <Slider slider_position={param13} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_param13(value)}} name='Slope, $\phi_3$' fontsize={11} color="#424b4f"/>
                </div>

                <div className="contourplot-1-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula1}/>
                </div>

                <div className="contourplot-2-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula2}/>
                </div>

                <div className="contourplot-3-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula3}/>
                </div>

                <div className="contourplot-4-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula4}/>
                </div>

                <div className="contourplot-5-8b">
                  <ContourPlot  min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula5}/>
                </div>

                <div className="contourplot-6-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula6}/>
                </div>

                <div className="contourplot-7-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula7}/>
                </div>

                <div className="contourplot-8-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula8}/>
                </div>

                <div className="contourplot-9-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula9}/>
                </div>

                <div className="contourplot-10-8b">
                  <ContourPlot min_x={-1} max_x={1} min_y={-1} max_y={1} min_z={-1.2} max_z={1.2} formula={formula10}/>
                </div>

                { (activation_type!=="sigmoid") && (
                    <>
                        <div className="line4-8b">
                            <Line axis={axis} lx1 ={line1.lx1} lx2={line1.lx2} ly1={line1.ly1} ly2={line1.ly2}/>
                        </div>

                        <div className="line5-8b">
                            <Line axis={axis}  lx1 ={line2.lx1} lx2={line2.lx2} ly1={line2.ly1} ly2={line2.ly2}/>
                        </div>

                        <div className="line6-8b">
                            <Line axis={axis}  lx1 ={line3.lx1} lx2={line3.lx2} ly1={line3.ly1} ly2={line3.ly2}/>
                        </div>

                        <div className="line7-8b">
                            <Line axis={axis} lx1 ={line1.lx1} lx2={line1.lx2} ly1={line1.ly1} ly2={line1.ly2}/>
                        </div>

                        <div className="line8-8b">
                            <Line axis={axis}  lx1 ={line2.lx1} lx2={line2.lx2} ly1={line2.ly1} ly2={line2.ly2}/>
                        </div>

                        <div className="line9-8b">
                            <Line axis={axis}  lx1 ={line3.lx1} lx2={line3.lx2} ly1={line3.ly1} ly2={line3.ly2}/>
                        </div>
                        <div className="line10-8b">
                            <Line axis={axis} lx1 ={line1.lx1} lx2={line1.lx2} ly1={line1.ly1} ly2={line1.ly2}/>
                        </div>
                        <div className="line10-8b">
                            <Line axis={axis}  lx1 ={line2.lx1} lx2={line2.lx2} ly1={line2.ly1} ly2={line2.ly2}/>
                        </div>
                        <div className="line10-8b">
                            <Line axis={axis}  lx1 ={line3.lx1} lx2={line3.lx2} ly1={line3.ly1} ly2={line3.ly2}/>
                        </div>
                    </>
                )}   
            </div>
            <div className="legend-3-8a">
                <b>Figure 3.8 </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                Shallow network with two inputs. (Top row) The input <span>{`$x$`}</span> is passed through three linear functions, 
                each with a different y-intercept <span>{`$\\theta_{\\bullet 0}$`}</span> and slopes <span>{`$\\theta_{\\bullet 1},\\theta_{\\bullet 2}$`}</span>. 
                (Center row) Each function is passed through the {activation_type} activation function. 
                (Bottom row) The three resulting functions are then weighted (scaled) by <span>{`$\\phi_{1},\\phi_{2}$`}</span>, and  <span>{`$\\phi_{3}$`}</span>, respectively. 
                (Bottom right) Finally, the weighted functions are summed, and an offset  <span>{`$\\phi_{0}$`}</span> that controls the height is added. 
                </MathJax>
            </div>
            <div className="interact-3-8a">
                Adjust the sliders to see how the parameter choices effects the loss.
            </div>
        </div>
    )
}

export default Figure3_8b