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





var CommentBox = React.createClass({

  loadCommentsFromServer: function(){
    $.ajax({
      url:this.props.url,
      dataType: 'json',  // type you expect to get back
      success: function(data){
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  // getInitialState executes exactly once
  // add an empty array as the inital state
  getInitialState: function(){
    return {data: []};
  },

  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
     </div>
    );
  }
});
React.renderComponent(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);


// Note: Props are immutable: they are passed from the parent and are "owned"
//       by the parent. To implement interactions, we introduce mutable state
//       to the component. this.state is private to the component and can be
//       changed by calling this.setState() [like model.save() with ORM]
//       When the state is updated, the component re-renders itself.
// 
//       render() methods are written declaratively as functions of this.props
//       and this.state
// 
// Note: componentDidMount is a method called automatically by React when a 
//       component is rendered. The key to dynamic updates is the call to 
//       this.setState(). 