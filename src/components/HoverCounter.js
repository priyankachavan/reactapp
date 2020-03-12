import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    
    // incrementCount = () =>{
    //     this.setState( prevState => {
    //         return { count : prevState.count + 1}
    //     })
    // }

    
    render() {
        // const {count} = this.state
        const { count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} time</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,10)
