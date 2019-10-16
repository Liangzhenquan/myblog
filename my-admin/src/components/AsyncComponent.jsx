import React from 'react'

export default function asyncomponent(importCom) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                component:null
            }
        }
        async componentDidMount() {
            const { default: component } = await importCom()
            this.setState({
                component
            })
        }
        render() {
            const C = this.state.component
            return C ? <C {...this.props}/> : null
        }
    }
}