import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushis.map((sushi) => {
          return <Sushi
          key={sushi.id} 
          sushi={sushi}
          removeSushi={props.removeSushi}
          />
         })
        }

        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer