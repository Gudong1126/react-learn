import React, { Component } from 'react'

import WrapWithLoadData from './wrapWithLoadData'
class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    UNSAFE_componentWillMount () {
        this.setState({
            username: this.props.data
        })
    }

    componentDidMount () {
        this.textarea.focus()
    }

    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleUsernameBlur (event) {
        this.props.saveData(event.target.value)
    }

    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit () {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({
                username,
                content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }

    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value = { this.state.username }
                            onBlur = { this.handleUsernameBlur.bind(this) }
                            onChange = { this.handleUsernameChange.bind(this) } />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea ref = { (textarea) => this.textarea = textarea }
                            value = { this.state.content }
                            onChange = { this.handleContentChange.bind(this) } />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick = { this.handleSubmit.bind(this) }>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

CommentInput = WrapWithLoadData(CommentInput, 'username')
export default CommentInput