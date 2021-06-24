import React, { Component } from 'react'
import Score from './Score.jsx'

export default class Student extends Component {
    render() {
        const scores = this.props.scores.map((data, index) => {
            return <Score
                date={ data.date }
                score={data.score }
                key={ index }
            />
        })
        return (
            <div>
                <h2>Name: { this.props.name }</h2>
                <h3>Bio: { this.props.bio }</h3>
                { scores }
            </div>
        )
    }
}