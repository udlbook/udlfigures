import "./Figure2_4.css"
import React, {useState} from 'react'
import Figure_2_4_image from './images/Figure_2_4_image'
import MovablePoint from "./components/MovablePoint"
import { MathJax } from "better-react-mathjax"

const Figure2_4 = () => {

    const [param1, set_param1] = useState(1.2)
    const [param2, set_param2] = useState(0.2)
    const [param3, set_param3] = useState(1.0)
    const [param4, set_param4] = useState(0.0)

    //L = (a+b*0.03-0.67)^2+(a+b*0.19-0.85)^2+(a+b*0.34-1.05)^2+(a+b*0.46-1.0)^2+(a+b*0.78-1.4)^2+(a+b*0.81-1.5)^2+(a+b*1.08-1.3)^2+(a+b*1.18-1.54)^2+(a+b*1.39-1.55)^2+(a+b*1.6-1.68)^2+(a+b*1.65-1.73)^2+(a+b*1.90-1.60)^2
    //L = 12a^2+22.82ab-31.74a+15.0121b^2-34.5276b+22.3233
    const L = 12 * param1 * param1 +22.82 * param1 * param2 -31.74* param1 +15.0121 * param2 * param2 -34.5276 * param2+22.3233

    const mapx = (x) => { return x/2 }
    const mapy = (y) => { return (2-y)/2 }

    const p1x = 0.03 ; const p1y = 0.67
    const p2x = 0.19 ; const p2y = 0.85
    const p3x = 0.34 ; const p3y = 1.05
    const p4x = 0.46 ; const p4y = 1.0
    const p5x = 0.78 ; const p5y = 1.4
    const p6x = 0.81 ; const p6y = 1.5
    const p7x = 1.08 ; const p7y = 1.3
    const p8x = 1.18 ; const p8y = 1.54
    const p9x = 1.39 ; const p9y = 1.55
    const p10x = 1.6 ; const p10y = 1.68
    const p11x = 1.65 ; const p11y = 1.73
    const p12x = 1.9 ; const p12y = 1.6

    const p1y_pred = param1 + param2 * p1x
    const p2y_pred = param1 + param2 * p2x
    const p3y_pred = param1 + param2 * p3x
    const p4y_pred = param1 + param2 * p4x
    const p5y_pred = param1 + param2 * p5x
    const p6y_pred = param1 + param2 * p6x
    const p7y_pred = param1 + param2 * p7x
    const p8y_pred = param1 + param2 * p8x
    const p9y_pred = param1 + param2 * p9x
    const p10y_pred = param1 + param2 * p10x
    const p11y_pred = param1 + param2 * p11x
    const p12y_pred = param1 + param2 * p12x

    const lx1 = 0
    const lx2 = 2.0
    const ly1 = param1 
    const ly2 = param1 + param2 * 2.0

    const axis={min_x:0.0, max_x:2.0, min_y:-1.0 , max_y: 1.0}
    return (

        <div className="figure-2-4">
            <div className="main-image-2-4">
                <div>
                    <Figure_2_4_image width_percent='100'/>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p1x)} y1={mapy(p1y)} x2={mapx(p1x)} y2={mapy(p1y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p2x)} y1={mapy(p2y)} x2={mapx(p2x)} y2={mapy(p2y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p3x)} y1={mapy(p3y)} x2={mapx(p3x)} y2={mapy(p3y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p4x)} y1={mapy(p4y)} x2={mapx(p4x)} y2={mapy(p4y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p5x)} y1={mapy(p5y)} x2={mapx(p5x)} y2={mapy(p5y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p6x)} y1={mapy(p6y)} x2={mapx(p6x)} y2={mapy(p6y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p7x)} y1={mapy(p7y)} x2={mapx(p7x)} y2={mapy(p7y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p8x)} y1={mapy(p8y)} x2={mapx(p8x)} y2={mapy(p8y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p9x)} y1={mapy(p9y)} x2={mapx(p9x)} y2={mapy(p9y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p10x)} y1={mapy(p10y)} x2={mapx(p10x)} y2={mapy(p10y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p11x)} y1={mapy(p11y)} x2={mapx(p11x)} y2={mapy(p11y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="error">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(p12x)} y1={mapy(p12y)} x2={mapx(p12x)} y2={mapy(p12y_pred)} stroke-dasharray="0.02,0.02" stroke="#d18362ff" stroke-width="0.01" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

    
             
                <div className="line">
                    <svg viewBox="0 0 1 1" >
                        <line x1={mapx(lx1)} y1={mapy(ly1)} x2={mapx(lx2)} y2={mapy(ly2)} stroke="#1f76D2" stroke-width="0.02" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>


                <div className="point-container-2-4">
                    <MovablePoint point_position_x={param1} point_position_y={param2} y_is_down={true}
                                        pointCallBack={(x,y) => {set_param1(x); set_param2(y)}} axis={axis}/>
                </div>

  

                <div className="text-container">
                        Loss: {L.toFixed(2)}  
                </div>
            </div>
            <div className="legend-2-4">
                <b>Figure 2.4 </b> 
                <MathJax inline dynamic hideUntilTypeset={"first"}> 
                    (Left) Loss function for linear regression model with the dataset in right panel. Each combination of 
                    parameters <span>{`$\\phi_{0},\\phi_{1}$`}</span> has an associated loss. The resulting loss 
                    function <span>{`$L[\\bfphi]$`}</span> can be visualized as a heatmap, where brighter regions represent larger losses. (Right)
                    Each position on the loss function corresponds to a line where the loss is calculated as in figure 2.2.
                </MathJax>
            </div>
            <div className="interact-2-4">
                Move the position on the loss function (blue dot) to change the parameters and see the associated model.
            </div>
        </div>
    )
}

export default Figure2_4