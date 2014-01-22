/** @jsx React.DOM */
var React = require('react');
var dispatch = {};

var MarkdownPreviewer = React.createClass({
  getInitialState: function () {
    return {renderedOutput: ''};
  },
  componentDidMount: function () {
    var self = this;

    window.addEventListener('message', function receiveMessage(event) {
      if (event.origin !== 'http://localhost:8080') {
        return;
      }

      console.log('render');
      if (typeof event.data.msgType !== 'undefined' && event.data.msgType == 'render-output') {
        self.refs.renderedOutput.getDOMNode().innerHTML = event.data.html;
      }
    }, false);
  },
  render: function () {
    return <div id="renderedOutput" ref="renderedOutput">{this.state.renderedOutput}</div>;
  }
});

React.renderComponent(<MarkdownPreviewer/>, document.getElementById('rendered-output-container'));

module.exports = {
  init: function () {
  }
};




