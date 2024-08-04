import './MovablePointInternal.css'
import React from 'react'
import Draggable from 'react-draggable'

const MovablePointInternal = ({point_position_x, point_position_y, pointCallBack, axis, bounds='parent', index=0, y_is_down=false, constrain='both', parentSize={width:0, height:0}, color='#1f76D2'} ) => {
    
    const point_diameter = 15.0 * parentSize.width / 215.0
    const actual_point_position_x = (point_position_x-axis.min_x)/(axis.max_x-axis.min_x) * (parentSize.width-point_diameter) 
    const actual_point_position_y = y_is_down ? (point_position_y-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) : parentSize.height-point_diameter - (point_position_y-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) 

    // Convert position back to point values and call external
    const pointCallBackInternal=(e, position)=>{
        let point_x = position.x
        point_x = point_x * (axis.max_x-axis.min_x) / (parentSize.width-point_diameter) + axis.min_x
        let point_y = position.y
        if(!y_is_down) { point_y = parentSize.height-point_diameter -point_y}
        point_y = point_y * (axis.max_y-axis.min_y) / (parentSize.height-point_diameter) + axis.min_y

        if(constrain==='y'){ point_x = point_position_x }
        if(constrain==='x'){ point_y = point_position_y }

        pointCallBack(point_x, point_y, index)
    }

    // Convert bounds to local coordinates
    var actual_bounds= bounds;
    if(bounds!=='parent'){
        actual_bounds = {} 
        actual_bounds['left'] = (bounds.left-axis.min_x)/(axis.max_x-axis.min_x) * (parentSize.width-point_diameter) 
        actual_bounds['right'] =(bounds.right-axis.min_x)/(axis.max_x-axis.min_x) * (parentSize.width-point_diameter) 
        actual_bounds['top'] = (bounds.top-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) 
        actual_bounds['bottom'] = (bounds.bottom-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) 
        if (!y_is_down){
            actual_bounds.top = parentSize.height-point_diameter - actual_bounds.top
            actual_bounds.bottom = parentSize.height-point_diameter - actual_bounds.bottom
        }    
}
    else{
        actual_bounds = {} 
        actual_bounds['left'] = (axis.min_x-axis.min_x)/(axis.max_x-axis.min_x) * (parentSize.width-point_diameter) 
        actual_bounds['right'] =(axis.max_x-axis.min_x)/(axis.max_x-axis.min_x) * (parentSize.width-point_diameter) 
        actual_bounds['top'] = (axis.min_y-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) 
        actual_bounds['bottom'] = (axis.max_y-axis.min_y)/(axis.max_y-axis.min_y) * (parentSize.height-point_diameter) 
    }

    return (
        <Draggable position={{x:actual_point_position_x, y:actual_point_position_y}}  onDrag={pointCallBackInternal} bounds={actual_bounds}>
            <div className="circle" style={{height:point_diameter+"px", width:point_diameter+"px"}} >
                <svg width="100%" height="100%" viewBox="-0.5 -0.5 1 1" >
                    <circle cx={0} cy={0} r={0.5} fill={color+'55'} />
                    <circle cx={0} cy={0} r={0.25} fill={color}/>
                </svg>
            </div>
        </Draggable>
    )
}

export default MovablePointInternal