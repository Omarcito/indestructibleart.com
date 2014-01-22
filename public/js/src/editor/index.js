/** @jsx React.DOM */
require('../../lib/ace');
require('../../lib/mode-markdown');

var React = require('react');
var marked = require('marked');
var editor;
var renderWindow;

marked.setOptions({
  gfm: true,
  tables: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  langPrefix: 'lang-'
});

var MarkdownEditor = React.createClass({
  getInitialState: function () {
    return {userInput: ''};
  },
  componentDidMount: function () {
    editor = ace.edit("markdownEditor");
    editor.setTheme('ace/theme/textmate');
    editor.getSession().setUseWrapMode(true);
    editor.setShowPrintMargin(false);
    editor.getSession().setMode('ace/mode/markdown');
    editor.getSession().setValue(this.state.userInput);
  },
  onKeyUp: function (e) {
    this.state.userInput = marked(editor.getValue());

    console.log(window.parent.name);
    window.opener.postMessage({
      msgType: 'render-output',
      html: this.state.userInput
    }, 'http://localhost:8080');
  },
  render: function () {
    return <pre id="markdownEditor" className="editor" ref="markdownEditor" onKeyUp={this.onKeyUp}></pre>;
  }
});

React.renderComponent(<MarkdownEditor/>, document.getElementById('markdown-editor-container'));
