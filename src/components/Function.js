import "./Function.css"
import React from 'react'

const Function = ({axis, formula, no_segments=100, color="#1f76D2", stroke_width=0.02}) => {

    const increment = (axis.max_x-axis.min_x)/no_segments
    const indices = Array.apply(null, Array(no_segments)).map(function (x, i) { return i })
    const x_points = Array.apply(null, Array(no_segments+1)).map(function (x, i) { return i*increment/(axis.max_x-axis.min_x); })
    const y_points = Array.apply(null, Array(no_segments+1)).map(function (x, i) { return 1-(formula(axis.min_x+i*increment)-axis.min_y)/(axis.max_y-axis.min_y); })

    return (
            <div className="function-container">
                <svg width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none" >        
                    {
                        indices.map((this_index, index) => {
                            return(
                                <line key={index} x1={x_points[index]} y1={y_points[index]} x2={x_points[index+1]} y2={y_points[index+1]} stroke={color} strokeWidth={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
                            )
                        })
                    }
              </svg>
        </div>
    )
}

export default Function
