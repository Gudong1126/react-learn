import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class Index extends Component {
    render () {
        return (
            <div>
                {users.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.username}</div>
                            <div>{item.age}</div>
                            <div>{item.gender}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// class LikeButton extends Component {
//     constructor () {
//         super()
//         this.state = { isLiked: false }
//     }

//     handleClick () {
//         this.setState({
//             isLiked: !this.state.isLiked
//         })
//     }

//     render () {
//         const likedText = this.props.likedText || '取消'
//         const unlikedText = this.props.unlikedText || '点赞'
//         return (
//             <button onClick={this.handleClick.bind(this)}>
//                 {this.state.isLiked ? likedText : unlikedText}👍
//             </button>
//         )
//     }
// }

// class Title extends Component {
//     handleClick (e) {
//         console.log(e)
//         console.log(this)
//         console.log(1111)
//     }
//     render () {
//         return (
//             <h1 onClick={this.handleClick.bind(this)}>title</h1>
//         )
//     }
// }

// class Header extends Component {
//     render () {
//         return (
//             <div>
//                 header
//             </div>
//         )
//     }
// }

// class Main extends Component {
//     render () {
//         return (
//             <div>main</div>
//         )
//     }
// }

// class Footer extends Component {
//     render () {
//         return (
//             <div>footer</div>
//         )
//     }
// }

// class Index extends Component {
//     render () {
//         return (
//             <div>
//                 {/* <Title/>
//                 <Header/>
//                 <Main/>
//                 <Footer/> */}
//                 <LikeButton likedText='已赞' unlikedText='赞' />
//             </div>
//         )
//     }
// }

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
