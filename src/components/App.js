import React from "react";
import { connect } from "react-redux";

const App = ({ posts }) => {
  // <h1>Post count: {posts.length}</h1>
  // <button onClick={getPosts}>Get Posts</button>
  //   <Posts posts={posts} />
  return (
    <div>
      <h1>Post count: {posts.length}</h1>
      <ul style={{ listStyle: "none" }}>
        {posts.map(post => (
          <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default App;

const mapStateToProps = state => ({ posts: state.posts });
export default connect(mapStateToProps)(App);
