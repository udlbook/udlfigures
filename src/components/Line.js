import React from 'react'

const Line = ({axis, lx1, lx2, ly1, ly2, color="#7fffd4"}) => {

    // Map to 0,0,1,1 square
    const x1 = (lx1-axis.min_x)/(axis.max_x-axis.min_x)
    const x2 = (lx2-axis.min_x)/(axis.max_x-axis.min_x)
    const y1 = 1-(ly1-axis.min_y)/(axis.max_y-axis.min_y)
    const y2 = 1-(ly2-axis.min_y)/(axis.max_y-axis.min_y)

    return (
        <svg height="100%" width="100%" viewBox="0 0 1 1" preserveAspectRatio="none" >
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} stroke-width="0.02"/>
        </svg>
    )
}

export default Line