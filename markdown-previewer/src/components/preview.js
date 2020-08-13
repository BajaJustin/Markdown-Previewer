import React from 'react';
import marked from 'marked';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.input)}}>
      </div>
    )
  }
}

export default Preview;