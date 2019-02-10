import React,{ Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
class Post extends Component {
  // state = {
  //   post : null
  // }
  // componentDidMount(){
  //   // console.log('moun ted');
  //   let id = this.props.match.params.post_id;
  //   console.log(id);
  //   axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((res)=>{
  //     this.setState({
  //       post:res.data
  //     })
  //     // console.log(this.state.post.title)
  //   })
  //
  // }

  render(){
    console.log(this.props)
    const post =this.props.post ? (
      <div className="post">
      <h4 className="center">{this.props.post.title}</h4>
      <p>{this.props.post.body }</p>
      </div>) :(
      <div className="center">
      Loading...
      </div>
      )
    return (
      <div className="container">
      {post}
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps)=>{
  let id = parseInt(ownProps.match.params.post_id);
  console.log('svds'+id)
  return {
    post:state.posts.find(post => post.id === id)
  }


}
export default connect(mapStateToProps)(Post);
