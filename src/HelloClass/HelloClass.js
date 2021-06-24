import React from 'react'

export class HelloClass extends React.Component { 
    componentDidMount() {
        console.log('Mount')
    }

    componentDidUpdate() {
        console.log('Updated')
    }
 
    render() {
        return <div>helloClass</div>
    }

}