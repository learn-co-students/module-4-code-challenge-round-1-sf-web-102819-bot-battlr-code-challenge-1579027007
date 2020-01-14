import React, { Component } from 'react'

export class SearchFilter extends Component {
    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    }
    render() {
        return (
            <div>
            <p> Search Bot By Name!</p>
            <input onChange ={this.handleChange} name='botName'/>
            </div>
        )
    }
}

export default SearchFilter
