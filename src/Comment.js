import React, { Component } from 'react';
// add Comment component here

export default class Comment extends Component {
  render() {
    
    return (
      <div id="blog-post" className="wrapper">
        Alright internet trolls<br/>
        Come at me<br/>
        I have been preparing<br/>
        My meme fortress is built<br/>
        I won't let you tilt me<br/>
        You only grew accustomed to the salt<br/>
        I was born in it<br/>
        {/* (remove the comment ticks and their surrounding brackets)
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
        <Comment commentText={comments[0]} />
        */}
      </div>
    );
  }
}
