import "./Figure4_1.css"
import React, {useState} from 'react'
import Figure_4_1_image from './images/Figure_4_1_image'
import Accordion from "./components/Accordion"
import Line from "./components/Line"
import Function from "./components/Function"
import { MathJax } from "better-react-mathjax"

const Figure4_1 = () => {

    const [network1_x, setNetwork1_x] = useState([-1.0, 0.0, 0.6, 1.0])
    const [network1_y, setNetwork1_y] = useState([-1.0, 1.0, -1.0, 1.0])
    const [network2_x, setNetwork2_x] = useState([-1.0, -0.2, 0.3, 1.0])
    const [network2_y, setNetwork2_y] = useState([0.6, -0.8, 0.3, -0.2])


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

    // Map from points to network parameters (network1)
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



    const network1= (x)=> { return n1_phi0 + n1_phi1 * Math.max(n1_theta_10+n1_theta_11*x,0) + n1_phi2 * Math.max(n1_theta_20+n1_theta_21*x,0) + n1_phi3 * Math.max(n1_theta_30+n1_theta_31*x,0)}
    const network2 = (x)=> { return n2_phi0 + n2_phi1 * Math.max(n2_theta_10+n2_theta_11*x,0) + n2_phi2 * Math.max(n2_theta_20+n2_theta_21*x,0) + n2_phi3 * Math.max(n2_theta_30+n2_theta_31*x,0)}
    const formula = (x) => {return network2(network1(x))}

    const axis={min_x: -1, max_x:1, min_y: -1, max_y:1}

    const update_n1 = (x_points, y_points) =>{
        setNetwork1_x(x_points)
        setNetwork1_y(y_points)
    }

    const update_n2 = (x_points, y_points) =>{
        setNetwork2_x(x_points)
        setNetwork2_y(y_points)
    }


    return (
        <div className="figure-4-1">
            <div className="main-image-4-1">
                <Figure_4_1_image width_percent='100'/>

                <div className="lines1-4-1">
                    <Line axis={axis} lx1={network1_x[0]} lx2={network1_x[1]} ly1={network1_y[0]} ly2={network1_y[1]} color="#a0d9d3ff"/>
                </div>
                <div className="lines1-4-1">
                    <Line axis={axis} lx1={network1_x[1]} lx2={network1_x[2]} ly1={network1_y[1]} ly2={network1_y[2]} color="#a0d9d3ff"/>
                </div>  
                <div className="lines1-4-1">
                    <Line axis={axis} lx1={network1_x[2]} lx2={network1_x[3]} ly1={network1_y[2]} ly2={network1_y[3]} color="#a0d9d3ff"/>
                </div>
                
                <div>
                    <div className="accordion1-4-1">
                        <Accordion axis={axis} x={network1_x} y={network1_y} callback={update_n1} color="#629e9c"/>
                    </div>
                </div>

                <div className="lines2-4-1">
                    <Line axis={axis} lx1={network2_x[0]} lx2={network2_x[1]} ly1={network2_y[0]} ly2={network2_y[1]} color="#d18362ff"/>
                </div>
                <div className="lines2-4-1">
                    <Line axis={axis} lx1={network2_x[1]} lx2={network2_x[2]} ly1={network2_y[1]} ly2={network2_y[2]} color="#d18362ff"/>
                </div>  
                <div className="lines2-4-1">
                    <Line axis={axis} lx1={network2_x[2]} lx2={network2_x[3]} ly1={network2_y[2]} ly2={network2_y[3]} color="#d18362ff"/>
                </div>
                
                <div className="accordion2-4-1">
                    <Accordion axis={axis} x={network2_x} y={network2_y} callback={update_n2} color="#773c23"/>
                </div>

                <div className = "function1-4-1">
                    <Function axis={axis} formula={formula} color="#773c23"  no_segments={200}/>
                </div>
            </div>
            <div className="legend-4-1">
                <b>Figure 3.8b </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                Composing two single-layer networks with three hidden units each. The output <span>{`$y$`}</span> of the first network constitutes the 
                input to the second network. (Top left) The first network maps inputs <span>{`$x\\in [-1,1]$`}</span> to outputs <span>{`$y\\in[-1,1]$`}</span> to outputs using a function 
                comprising three linear regions (fourth linear region is outside range of graph). 
                (Top right) The second network defines a function comprising three linear regions that takes <span>{`$y$`}</span> and returns <span>{`$y'$`}</span>.
                (Bottom) The combined effect of these two functions when composed.
                </MathJax>
            </div>
            <div className="interact-4-1">
                Manipulate the functions defined by the two shallow networks (using the circular handles) to see the effect of composing the functions.
            </div>
                  
                  
        </div>
    )
}

export default Figure4_1