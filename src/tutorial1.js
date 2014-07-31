/** @jsx React.DOM */

// We pass some methods in a Javascript object to React.createClass() to 
// create a new React component. The most important of these methods is called
// render which returns a tree of React components that will eventually 
// render to HTLM
// the <div> tags are not actual DOM nodes; they are instantiations of React
// div components. You can think of these as markers or pieces of data that
// React knows how to handle. React is safe.
//
// You do not have to return basic HTML. You can return a tree of components
// that you built.  This is what makes React composable.
// 
// React.renderComponent() instantiates the root component, starts the 
// framework, and injects the markup into a raw DOM element provided as the
// second argument


var data = [
  {author: "Elon Musk", text: "For my part, I will never give up and I mean never"},
  {author: "Nick Wells", text: "Lasting takes discipline"}

]


var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
     </div>
    );
  }
});
React.renderComponent(
  <CommentBox data={data} />,
  document.getElementById('content')
);
