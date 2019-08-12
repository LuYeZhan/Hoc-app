import React, { Component } from 'react'

 const withCoordinates = (Comp) => class withCoordinates extends Component {
     state = {
         location: '',
     }
     componentDidMount () {
        const location = navigator.geolocation.getCurrentPosition((location) =>{
            this.setState({
                location
            })
        });

     }
    render() {
        return (
            <div>
                <Comp lat='40.45678'/>
            </div>
        )
    }
}

export default withCoordinates;