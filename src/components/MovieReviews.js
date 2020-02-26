// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
   return( 
        <ul className='review-list'>
            {reviews.map(review => <li className='review'>{review.display_title}<br/>{review.summary_short}</li>)}
        </ul>
   )

}

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews