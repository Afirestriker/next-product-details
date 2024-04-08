'use client'

import { Rating } from 'react-simple-star-rating'

const StarRating = (props) => {
    return (
        <Rating
            initialValue={props.value}
            readonly={true}
            allowFraction={true}
            size={23}
        />
    )
}

export default StarRating;
