import React from 'react'

const Score = (props) => {
    return (
        <div>
            <p>Date: { props.date }</p>
            <p>Score: { props.score }</p>
        </div>
    )
}

export default Score