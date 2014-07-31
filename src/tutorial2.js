/** @jsx React.DOM */
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index){
      return (
        <Comment key={index} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}     
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});


// HTML components are regular React components just like the ones you
// define with one difference. The JSX compiler will automatically rewrite
// HTML tags to React.DOM.tagName

// When you're mapping you need to include a unique identifier as the key
// 