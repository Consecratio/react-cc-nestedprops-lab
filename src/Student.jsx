import React from 'react'
import Score from './Score.jsx'

const Student = (props) => {
    const scores = props.scores.map((data, index) => {
        return <Score
            date={ data.date }
            score={data.score }
            key={ index }
        />
    })

    return (
        <div>
            <h2>Name: { props.name }</h2>
            <h3>Bio: { props.bio }</h3>
            { scores }
        </div>
    )
}

export default Student