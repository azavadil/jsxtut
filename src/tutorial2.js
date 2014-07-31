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
  
  // when the user submits the form we should clear the form, submit a request
  // to the server, and refresh the list of comments

  // listen for the form's submit event and clear the form
  handleSubmit: function(){
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if(!text || !author){
      return false;
    }
    // TODO
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return false;  // prevent default behavior, can also use evt.preventDefault()
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


// HTML components are regular React components just like the ones you
// define with one difference. The JSX compiler will automatically rewrite
// HTML tags to React.DOM.tagName

// When you're mapping you need to include a unique identifier as the key
// 
// Reach attaches event handlers to components using a camelCase naming
// convention. We attach an onSumit handler to the form that clears the form
// fields when the form is submitted with valid input. We always return false
// from the event handler to prevent the browser's default action of submitting
// the form