import React from 'react'
import "./Card.css"
export const Cards = ({name,para,img}) => {
  return (
  <div className="feature col py-3  card-div" >
     <div className="feature-icon d-inline-flex align-items-center justify-content-center 
     text-bg-primary bg-gradient fs-2 mb-3 align-item-center">
            <img src={img} alt="" width={80} />
             </div>
              <h3 className="fs-2 text-body-emphasis">{name} </h3>
              <p>{para}</p>
</div>
  )
}
export default Cards 