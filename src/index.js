// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

import CommentApp from './comment/CommentApp'
ReactDOM.render(<CommentApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// class Header extends Component {
//     constructor () {
//         super()
//         console.log('construct')
//     }
  
//     UNSAFE_componentWillMount () {
//         console.log('component will mount')
//     }
  
//     componentDidMount () {
//         console.log('component did mount')
//     }

//     componentWillUnmount() {
//         console.log('component will unmount')
//     }
  
//     render () {
//         console.log('render')
//         return (
//             <div>
//                 <h1 className='title'>React 小书</h1>
//             </div>
//         )
//     }
// }

// class Index extends Component {
//     constructor() {
//         super()
//         this.state = {
//             isShowHeader: true
//         }
//     }
  
//     handleShowOrHide () {
//         this.setState({
//             isShowHeader: !this.state.isShowHeader
//         })
//     }
  
//     render () {
//         return (
//             <div>
//                 {this.state.isShowHeader ? <Header /> : null}
//                 <button onClick={this.handleShowOrHide.bind(this)}>
//                     显示或者隐藏标题
//                 </button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Index />, document.getElementById('root'));

// class AutoFocusInput extends Component {
//     componentDidMount () {
//         this.input.focus()
//     }

//     render () {
//         return (
//             <input ref = { (input) => this.input = input } />
//         )
//     }
// }

// ReactDOM.render(
//     <AutoFocusInput />,
//     document.getElementById('root')
// )

// class Card extends Component {
//     render () {
//         return (
//             <div className='card'>
//                 <div className='card-content'>
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }
  
// ReactDOM.render(
//     <Card>
//         <div>
//             <h2>React.js 小书</h2>
//             <div>开源、免费、专业、简单</div>
//             订阅：
//             <input />
//       </div>
//     </Card>,
//     document.getElementById('root')
// )