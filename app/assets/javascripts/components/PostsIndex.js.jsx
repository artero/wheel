class PostsIndex extends React.Component{
  // using bable for es6 transpilling

  render() {
    console.log(this.props.posts);
    return (
    <div>
      <h1>All Posts</h1>
      {this._renderPosts()}
    </div>
    );
  }

  _renderPosts() {
    let posts = this.props.posts;
    // let postDisplay = posts.map(function (post, i){
    let postDisplay = posts.map( (post, i) => {
      return <li key={i}>{post.title}: {post.content}</li>
    })
    return (
      <ul>
        {postDisplay}
      </ul>
    )
  }
}