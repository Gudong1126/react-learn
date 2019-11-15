
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import WrapWithLoadData from './wrapWithLoadData'
class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            comments: []
        }
    }

    UNSAFE_componentWillMount () {
        this.setState({
            comments: this.props.data
        })
    }

    handleSubmitComment (comment) {
        console.log(comment)
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        this.props.saveData(this.state.comments)
    }

    handleDeleteComment (index) {
        let { comments } = this.state
        comments.splice(index, 1)
        this.setState({ comments })
        this.props.saveData(this.state.comments)
    }

    render () {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={ this.handleSubmitComment.bind(this) } />
                <CommentList comments={ this.state.comments }
                    onDeleteComment={ this.handleDeleteComment.bind(this) } />
            </div>
        )
    }
}

CommentApp = WrapWithLoadData(CommentApp, 'comments')
export default CommentApp