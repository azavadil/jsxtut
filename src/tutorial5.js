/** @jsx React.DOM */
var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
    );
  }
});

// Notice how the comment component reads the data passed to it from the 
// commentList
// e.g. in commentList
// <Comment author="Alan Turing">Codebreaker</Comment>
//
// note that the nested element is available as this.props.children
// e.g. in the parent node we have
// <Comment author="Alan Turing">Codebreaker</Comment>
// @this.props.author: returns the author property
// @this.props.children: returns the text node 
//
// By surrounding a Javascript expression in braces inside JSX (either as an
// attribute or a child) you can drop text or React components into the tree
// We access named attributes passed to the component as keys on this.props
// and any nested elements as this.props.children
//
// Note that we add the Showdown library to the index to allow markdown
// e.g. in index.html 
// <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
// 
// note: when we add the Showdown library we need to convert this.props.children
// from React's wrapped text to a raw string that Showdown will understand
//
// note: dangerouslySetInnerHTML API intentionally makes it difficult to 
//       insert raw HTML. For Showdown we take advantage of the backdoor.
//       However by using this feature we're relying on Showdown to be 
//       secure.