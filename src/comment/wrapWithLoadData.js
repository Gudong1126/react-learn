
import React, { Component } from 'react'

export default (WrappedComponent, name) => {
    class LocalStorageActions extends Component {
        constructor () {
            super()
            this.state = {
                data: null
            }
        }

        UNSAFE_componentWillMount () {
            let data = localStorage.getItem(name)
            if (data) {
                try {
                    this.setState({ data: JSON.parse(data) })
                } catch (error) {
                    this.setState({ data })
                }
            }
        }

        saveData (data) {
            try {
                localStorage.setItem(name, JSON.stringify(data))
            } catch (error) {
                localStorage.setItem(name, `${data}`)
            }
        }

        render () {
            return (
                <WrappedComponent data={ this.state.data }
                    saveData={this.saveData.bind(this)}
                    // 其他的参数原封不动地传递给被包装的组件
                    { ...this.props } />
            )
        }
    }

    return LocalStorageActions
}