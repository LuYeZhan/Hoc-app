import React from 'react'
import withCoordinates from './withCoordinates'

const Form = (props) => {
    console.log(props);
    return (
        <div>
            <h1> This is a form</h1>
        </div>
    )
}

export default withCoordinates(Form);

