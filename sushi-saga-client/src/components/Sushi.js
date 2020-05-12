import React, { Fragment } from 'react'

const Sushi = (props) => {
  
  
  // console.log(props.sushi.price)
  return (
    
    <div className="sushi">
      <div className="plate" 
           onClick={()=>{props.removeSushi(props.sushi)}}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi