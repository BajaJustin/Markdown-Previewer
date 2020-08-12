import React from 'react';

// Components 
import Preview from './preview';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Editor</h1>
        <textarea 
          id="editor" 
          value = {this.state.input}
          onChange= {this.handleChange.bind(this)}
        ></textarea>
        <Preview input={this.state.input}/>
      </div>
    )
  }
}

export default Editor;