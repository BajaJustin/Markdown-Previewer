import React from 'react';
import { marked } from 'marked';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview">
        <h1>Preview</h1>
        <p>{this.props.input}</p>
      </div>
    )
  }
}

export default Preview;