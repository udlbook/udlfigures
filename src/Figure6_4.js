import "./Figure6_4.css"
import React, {useState} from 'react'
import Figure_6_4_image from './images/Figure_6_4_image'
import Function from "./components/Function"
import MovablePoint from "./components/MovablePoint"
import { MathJax } from "better-react-mathjax"

const Figure6_4 = () => {

    const [param1, set_param1] = useState(-5.0)
    const [param2, set_param2] = useState(20.0)

    const formula1 = (x)=> { return Math.sin(param1 + 0.06 * param2 * x) * Math.exp(-(param1 +0.06 * param2 * x)*(param1 +0.06 * param2 * x)/32.0)}

    const axis1={min_x:-15.0, max_x:15.0, min_y:-1.0 , max_y: 1.0}
    const axis2={min_x:-10.0, max_x:10.0, min_y:2.5 , max_y: 22.5}

    const sq_diff = (x,y)=>{ return (formula1(x)-y) * (formula1(x)-y) }

    const loss=()=>{
        let loss = 0;
        loss+= sq_diff(-1.920e+00, -1.051e+00)
        loss+= sq_diff( -1.422e+01, -2.482e-02)
        loss+= sq_diff(  1.490e+00,  8.896e-01)
        loss+= sq_diff( -1.940e+00, -4.943e-01)
        loss+= sq_diff( -2.389e+00, -9.371e-01)
        loss+= sq_diff( -5.090e+00,  4.306e-01)
        loss+= sq_diff(-8.861e+00,  9.577e-03)
        loss+= sq_diff( 3.578e+00, -7.944e-02)
        loss+= sq_diff(-6.010e+00,  1.624e-01)
        loss+= sq_diff( -6.995e+00, -2.682e-01)
        loss+= sq_diff( 3.634e+00, -3.129e-01)
        loss+= sq_diff( 8.743e-01,  8.303e-01)
        loss+= sq_diff( -1.096e+01, -2.365e-02)
        loss+= sq_diff(  4.073e-01,  5.098e-01)
        loss+= sq_diff( -9.467e+00, -2.777e-01)
        loss+= sq_diff( 8.560e+00,  3.367e-01)
        loss+= sq_diff(  1.062e+01,  1.927e-01)
        loss+= sq_diff( -1.729e-01, -2.222e-01)
        loss+= sq_diff(  1.040e+01,  6.352e-02)
        loss+= sq_diff( -1.261e+01,  6.888e-03)
        loss+= sq_diff(  1.574e-01,  3.224e-02)
        loss+= sq_diff( -1.304e+01,  1.091e-02)
        loss+= sq_diff( -2.156e+00, -5.706e-01)
        loss+= sq_diff( -1.210e+01, -5.258e-02)
        loss+= sq_diff( -1.119e+01, -3.666e-02)
        loss+= sq_diff(  2.902e+00,  1.709e-01)
        loss+= sq_diff(-8.220e+00, -4.805e-02)
        loss+= sq_diff(-1.179e+01,  2.008e-01)
        loss+= sq_diff(-8.391e+00, -1.904e-01)
        loss+= sq_diff(-4.505e+00,  5.952e-01)
        return loss
    }


    return (

        <div className="figure-6-4">
            <div className="main-image-6-4">
                <Figure_6_4_image width_percent='100'/>

                <div className = "function1-6-4">
                    <Function axis={axis1} formula={formula1} color="#629e9c"  no_segments={200} stroke_width={0.015}/>
                </div>

                <div className="point-container-6-4">
                    <MovablePoint point_position_x={param1} point_position_y={param2} y_is_down={false}
                                        pointCallBack={(x,y) => {set_param1(x); set_param2(y)}} axis={axis2}/>
                </div>

                <div className="text-container-6-4">
                        Loss: {loss().toFixed(2)}  
                </div>
            </div>

            <div className="legend-6-4">
                <b>Figure 6.4 </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                    (Left) Loss function for Gabor model with the dataset in right panel. Each combination of 
                    parameters <span>{`$\\phi_{0},\\phi_{1}$`}</span> has an associated loss. The resulting loss 
                    function <span>{`$L[\\bfphi]$`}</span> can be visualized as a heatmap, where brighter regions represent larger losses. (Right)
                    Each position on the loss function corresponds to a Gabor function.
                </MathJax>
            </div>
            <div className="interact-6-4">
                Move the position on the loss function (blue dot) to change the parameters and see the associated model.
            </div>
        </div>
    )
}

export default Figure6_4