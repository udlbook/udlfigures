import "./Figure4_5.css"
import React, {useState} from 'react'
import Figure_4_5_image from './images/Figure_4_5_image'
import Accordion from './components/Accordion'
import Function from './components/Function'
import Slider from "./components/Slider"
import { MathJax } from "better-react-mathjax"

const Figure4_5 = () => {
    const [network1_x, setNetwork1_x] = useState([0.0, 1.0, 1.6, 2.0])
    const [network1_y, setNetwork1_y] = useState([-0.75, 0.8, -0.8, 0.8])
    const [network2_x, setNetwork2_x] = useState([0.0, 1.0, 1.6, 2.0])
    const [network2_y, setNetwork2_y] = useState([-0.18, 0.5, -0.2, 0.8])
    const [network3_x, setNetwork3_x] = useState([0.0, 1.0, 1.6, 2.0])
    const [network3_y, setNetwork3_y] = useState([0.48, -0.25, 0.93, -0.2])

    const [update1, set_update1] = useState(0)
    const [update2, set_update2] = useState(0)
    const [update3, set_update3] = useState(0)

    const [phi0, set_phi0] = useState(-0.36)
    const [phi1, set_phi1] = useState(-1)
    const [phi2, set_phi2] = useState(1.6)
    const [phi3, set_phi3] = useState(0.7)


    // Map from points to network parameters (network1)
    const n1_section1_slope = (network1_y[1]-network1_y[0])/(network1_x[1]-network1_x[0])
    const n1_section2_slope = (network1_y[2]-network1_y[1])/(network1_x[2]-network1_x[1])-n1_section1_slope
    const n1_section3_slope = (network1_y[3]-network1_y[2])/(network1_x[3]-network1_x[2])-n1_section1_slope - n1_section2_slope
    const n1_phi0 = network1_y[0]
    const n1_phi1 = Math.sign(n1_section1_slope)
    const n1_phi2 = Math.sign(n1_section2_slope)
    const n1_phi3 = Math.sign(n1_section3_slope)
    const n1_theta_10 = -n1_phi1 * network1_x[0] * n1_section1_slope
    const n1_theta_11 = Math.abs( n1_section1_slope)
    const n1_theta_20 = -n1_phi2 * network1_x[1] * n1_section2_slope
    const n1_theta_21 = Math.abs(n1_section2_slope)
    const n1_theta_30 = -n1_phi3 * network1_x[2] * n1_section3_slope
    const n1_theta_31 = Math.abs(n1_section3_slope)

    // Map from points to network parameters (network2)
    const n2_section1_slope = (network2_y[1]-network2_y[0])/(network2_x[1]-network2_x[0])
    const n2_section2_slope = (network2_y[2]-network2_y[1])/(network2_x[2]-network2_x[1])-n2_section1_slope
    const n2_section3_slope = (network2_y[3]-network2_y[2])/(network2_x[3]-network2_x[2])-n2_section1_slope - n2_section2_slope
    const n2_phi0 = network2_y[0]
    const n2_phi1 = Math.sign(n2_section1_slope)
    const n2_phi2 = Math.sign(n2_section2_slope)
    const n2_phi3 = Math.sign(n2_section3_slope)
    const n2_theta_10 = -n2_phi1 * network2_x[0] * n2_section1_slope
    const n2_theta_11 = Math.abs( n2_section1_slope)
    const n2_theta_20 = -n2_phi2 * network2_x[1] * n2_section2_slope
    const n2_theta_21 = Math.abs(n2_section2_slope)
    const n2_theta_30 = -n2_phi3 * network2_x[2] * n2_section3_slope
    const n2_theta_31 = Math.abs(n2_section3_slope)

    // Map from points to network parameters (network3)
    const n3_section1_slope = (network3_y[1]-network3_y[0])/(network3_x[1]-network3_x[0])
    const n3_section2_slope = (network3_y[2]-network3_y[1])/(network3_x[2]-network3_x[1])-n3_section1_slope
    const n3_section3_slope = (network3_y[3]-network3_y[2])/(network3_x[3]-network3_x[2])-n3_section1_slope - n3_section2_slope
    const n3_phi0 = network3_y[0]
    const n3_phi1 = Math.sign(n3_section1_slope)
    const n3_phi2 = Math.sign(n3_section2_slope)
    const n3_phi3 = Math.sign(n3_section3_slope)
    const n3_theta_10 = -n3_phi1 * network3_x[0] * n3_section1_slope
    const n3_theta_11 = Math.abs( n3_section1_slope)
    const n3_theta_20 = -n3_phi2 * network3_x[1] * n3_section2_slope
    const n3_theta_21 = Math.abs(n3_section2_slope)
    const n3_theta_30 = -n3_phi3 * network3_x[2] * n3_section3_slope
    const n3_theta_31 = Math.abs(n3_section3_slope)

    const network1= (x)=> { return n1_phi0 + n1_phi1 * Math.max(n1_theta_10+n1_theta_11*x,0) + n1_phi2 * Math.max(n1_theta_20+n1_theta_21*x,0) + n1_phi3 * Math.max(n1_theta_30+n1_theta_31*x,0)}
    const network2 = (x)=> { return n2_phi0 + n2_phi1 * Math.max(n2_theta_10+n2_theta_11*x,0) + n2_phi2 * Math.max(n2_theta_20+n2_theta_21*x,0) + n2_phi3 * Math.max(n2_theta_30+n2_theta_31*x,0)}
    const network3 = (x)=> { return n3_phi0 + n3_phi1 * Math.max(n3_theta_10+n3_theta_11*x,0) + n3_phi2 * Math.max(n3_theta_20+n3_theta_21*x,0) + n3_phi3 * Math.max(n3_theta_30+n3_theta_31*x,0)}

    const h1 = (x) => { return Math.max(network1(x),0)}
    const h2 = (x) => { return Math.max(network2(x),0)}
    const h3 = (x) => { return Math.max(network3(x),0)}

    const h1phi1 = (x) => { return phi1 * Math.max(network1(x),0)}
    const h2phi2 = (x) => { return phi2 *Math.max(network2(x),0)}
    const h3phi3 = (x) => { return phi3 * Math.max(network3(x),0)}

    const output = (x) => {return phi0 + phi1 * Math.max(network1(x),0)+phi2 *Math.max(network2(x),0)+phi3 * Math.max(network3(x),0)}
    const axis={min_x: 0, max_x:2, min_y: -1, max_y:1}

    const update_n1 = (x_points, y_points) =>{
        setNetwork1_x(x_points)
        setNetwork2_x(x_points)
        setNetwork3_x(x_points)
        setNetwork1_y(y_points)
        set_update2(Math.random())
        set_update3(Math.random())
    }

    const update_n2 = (x_points, y_points) =>{
        setNetwork1_x(x_points)
        setNetwork2_x(x_points)
        setNetwork3_x(x_points)
        setNetwork2_y(y_points)
        set_update1(Math.random())
        set_update3(Math.random())

    }

    const update_n3 = (x_points, y_points) =>{
        setNetwork1_x(x_points)
        setNetwork2_x(x_points)
        setNetwork3_x(x_points)
        setNetwork3_y(y_points)
        set_update1(Math.random())
        set_update2(Math.random())
    }

    return (
        <div className="figure-4-5">
            <div className="main-image-4-5">
                <Figure_4_5_image width_percent='100'/>

                <div className = "function1-4-5">
                    <Function axis={axis} formula={network1} color="#d18362"  no_segments={200}/>
                </div>

                <div className = "function2-4-5">
                    <Function axis={axis} formula={network2} color="#a0d9d3"  no_segments={200}/>
                </div>
                <div className = "function3-4-5">
                    <Function axis={axis} formula={network3} color="#c6cdcf"  no_segments={200}/>
                </div>

                <div className = "function4-4-5">
                    <Function axis={axis} formula={h1} color="#d18362"  no_segments={200}/>
                </div>

                <div className = "function5-4-5">
                    <Function axis={axis} formula={h2} color="#a0d9d3"  no_segments={200}/>
                </div>
                <div className = "function6-4-5">
                    <Function axis={axis} formula={h3} color="#c6cdcf"  no_segments={200}/>
                </div>

                <div className = "function7-4-5">
                    <Function axis={axis} formula={h1phi1} color="#d18362"  no_segments={200}/>
                </div>
                <div className = "function8-4-5">
                    <Function axis={axis} formula={h2phi2} color="#a0d9d3"  no_segments={200}/>
                </div>
                <div className = "function9-4-5">
                    <Function axis={axis} formula={h3phi3} color="#c6cdcf"  no_segments={200}/>
                </div>
                <div className = "function10-4-5">
                    <Function axis={axis} formula={output} color="#476779"  no_segments={200}/>
                </div>




                <div className="accordion1-4-5">
                    <Accordion axis={axis} x={network1_x} y={network1_y} callback={update_n1} color="#773c23" update={update1}/>
                </div>

                <div className="accordion2-4-5">
                    <Accordion axis={axis} x={network2_x} y={network2_y} callback={update_n2} color="#34837a" update={update2}/>
                </div>

                <div className="accordion3-4-5">
                    <Accordion axis={axis} x={network3_x} y={network3_y} callback={update_n3} color="#424b4f" update={update3}/>
                </div>


                <div className="slider-container1-4-5">
                    <Slider slider_position={phi0} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_phi0(value)}} name='Intercept, $\phi^{\prime}_0$' fontsize={11} color="#476779"/>
                </div>

                <div className="slider-container2-4-5">
                    <Slider slider_position={phi1} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_phi1(value)}} name='Slope, $\phi^{\prime}_1$' fontsize={11} color="#773c23"/>
                </div>

                <div className="slider-container3-4-5">
                    <Slider slider_position={phi2} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_phi2(value)}} name='Slope, $\phi^{\prime}_2$' fontsize={11} color="#629e9c"/>
                </div>

                <div className="slider-container4-4-5">
                    <Slider slider_position={phi3} min_val={-2.0} max_val={2.0} sliderCallBack={(value)=>{set_phi3(value)}} name='Slope, $\phi^{\prime}_3$' fontsize={11} color="#424b4f"/>
                </div> 
            </div>
            <div className="legend-4-5">
                <b>Figure 4.5 </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                Computation for the deep network in figure 4.4. (Top row) The inputs to the second hidden layer 
                (i.e., the pre-activations) are three piecewise linear functions where the "joints" between the linear regions are at the same places. 
                (Middle row) Each piecewise linear function is clipped to zero by the ReLU activation function. 
                (Bottom row) These clipped functions are then weighted with parameters <span>{`$\\phi_{1}',\\phi_{2}'$`}</span>, and <span>{`$\\phi_{3}'$`}</span>, respectively.  
                (Bottom right) Finally, an offset <span>{`$\\phi_{0}'$`}</span> is added to the sum of the clipped and weighted functions. 
                </MathJax>
            </div>
            <div className="interact-4-5">
                Manipulate the layer 1 preactivations (using the circular handles in the top row) and the outputs weights (using siders) to see how they combine to make the output.
            </div>
        </div>
    )
}

export default Figure4_5