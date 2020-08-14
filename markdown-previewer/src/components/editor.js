import React from 'react';

// Components 
import Preview from './preview';

const placeHolderText = `
  # This is an h1 header
  ## and also a h2 sub header
  Check out this [link] 
  and some inline code,
  \`<h1>Hello, World!</h1>\`
  
  This is a code block:
  \`\`\`
    function test() {
      console.log("notice the blank line before this function?");
    }
  \`\`\`
  
  \`\`\`
  Here is a list:
    - JavaScript
    - HTML 
    - CSS 
    - React
  \`\`\`
  There's also
  > Block Quotes!
  
  Here's an image
  ![React Logo w/ Text](https://goo.gl/Umyytc)

  **Don't forget bold text!**
`

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: placeHolderText
    }
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div id="editorSection">
        <h1 class="mainHeading">Editor</h1>
        <textarea 
          id="editor" 
          value = {this.state.input}
          onChange= {this.handleChange.bind(this)}
        ></textarea>
        <h1 class="mainHeading">Preview</h1>
        <Preview input={this.state.input}/>
      </div>
    )
  }
}

export default Editor;