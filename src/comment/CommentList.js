import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    static defaultProps = {
        comments: [
            { username: 'Jerry', content: 'hello' },
            { username: 'Tomy', content: 'World' }
        ]
    }

    render () {
        return (
            <div>{ this.props.comments.map((comment, i) => {
                return (
                    <Comment comment = { comment } key = { i } />
                )
            })}
            </div>
        )
    }
}

export default CommentList