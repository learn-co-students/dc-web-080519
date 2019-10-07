import React from 'react'
import Comment from './Comment'

const comments = [
  {id: 1, content: "Hello", author: "Ann"},
  {id: 2, content: "Hey", author: "Shannon"},
  {id: 3, content: "Hi", author: "JC"},
  {id: 4, content: "Woooo", author: "Chine"},
  {id: 5, content: "zzzzz", author: "Paul"}
]

//create a react component using class syntax

class Commentbox extends React.Component {
  render(){
    return (
      <div className="comment-box">Comment Box Goes here
      {
        comments.map((commentObject, index) => <Comment
          key={commentObject.id}
          data={commentObject}
        />)
      }
      </div>
    )
  }
}

// class Commentbox extends React.Component {
//   render(){
//     return (
//       <div className="comment-box">Comment Box Goes here
//         {[
//          <Comment key=1 data={comments[0]}/>,
//          <Comment key=2 data={comments[1]}/>,
//          <Comment key=3 data={comments[2]}/>,
//          <Comment key=4 data={comments[3]}/>
//         ]}
//       </div>
//     )
//   }
// }

// class Commentbox extends React.Component {
//   render(){
//     return (
//       <div className="comment-box">Comment Box Goes here
//         <Comment data={comments[0]}/>
//         <Comment data={comments[1]}/>
//         <Comment data={comments[2]}/>
//         <Comment data={comments[3]}/>
//       </div>
//     )
//   }
// }

// class Dummy extends React.Component {
//   render(){
//     return <p>I am a dummy component</p>
//   }
// }
//
// function sayMyName(){
//   console.log("ann")
// }
//
// export {Dummy, sayMyName}
export default Commentbox
