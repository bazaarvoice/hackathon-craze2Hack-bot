import React from 'react'
import ReactStars from "react-rating-stars-component";

function Rating() {
    return (
        <div>
            <h5>Please rate the product</h5>
            <ReactStars
    count={5}
    isHalf={true}
    size={24}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default Rating
