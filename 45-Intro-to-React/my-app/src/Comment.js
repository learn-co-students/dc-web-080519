import React from 'react'

//you can create componetns using class
//you can ALSO create components using functions
  //benefit of functional components is that they are much shorter
const Comment = (props) => {
  console.log(props)
  return (
    <p>{props.data.content} by {props.data.author}</p>
  )
}

// class Comment extends React.Component {
//   render(){
//     console.log(this.props)
//     return (
//       <p className="comment">Comment</p>
//     )
//   }
// }

export default Comment
