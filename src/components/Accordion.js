import "./Accordion.css"
import React, {useState, useEffect, useRef} from 'react'
import MovablePointInternal from "./MovablePointInternal.js"

const Accordion = ({axis, x, y, callback, color="##1f76D2", update}) => {

    const [x_points, set_x_points] = useState(x)
    const [y_points, set_y_points] = useState(y)
    const n_points = x.length;

    // Machinery to store width and height of region
    const [size, setSize] = useState({width:0, height:0})
    const ref = useRef(null)
  
    // Compute width of this component
    useEffect(() => {
        setSize({width:ref.current.offsetParent.clientWidth, height:ref.current.offsetParent.clientHeight})
    })

    // Hack to update when variable "update" is changed
    useEffect(() => {
        set_x_points(x);
        set_y_points(y);
    }, [update])


    // Update one of the points
    const set_point_position=(x,y,index)=>{
        const x_points_new = structuredClone(x_points) ;
        const y_points_new = structuredClone(y_points) ;
        x_points_new[index] = x
        y_points_new[index] = y
        set_x_points(x_points_new)
        set_y_points(y_points_new)
        callback(x_points, y_points)
    }

    const space_between_points =(axis.max_x-axis.min_x)/20;

    return (
        <div className="accordion-container" ref={ref}>
            {
                  x_points.map((this_x, index) => { 
                    switch(index){
                        case 0:
                        case n_points-1:
                            // First and last point point constrained to move only in y direction
                            const bounds1 = {left: x_points[index], right: x_points[index], top:axis.max_y, bottom:axis.min_y}
                            return(
                                <>
                                <MovablePointInternal point_position_x={x_points[index]} point_position_y={y_points[index]} index={index} bounds={bounds1} axis={axis} pointCallBack={set_point_position} parentSize={size} color={color}/>
                                </>
                            )
                        default:
                            // Remaining points are constrained to not change order
                            const bounds2 = {left: x_points[index-1]+space_between_points, right: x_points[index+1]-space_between_points , top:axis.max_y, bottom:axis.min_y}
                            return(
                                <MovablePointInternal point_position_x={x_points[index]} point_position_y={y_points[index]} index={index} bounds={bounds2} axis={axis} pointCallBack={set_point_position} parentSize={size} color={color}/>
                            )
                            break;
                    }
                    
                  })
            }
        </div>
  )
}

export default Accordion