import React from 'react';

const ctrlStyle = {
  display: 'inline-block'
}

const upperButtonStyle = {
  height: '20px',
  width: '20px',
  borderRadius: '1px',
  backgroundColor: 'blue',
  margin: '1px'
}

const bottomeButtonStyle = {
  height: '20px',
  width: '20px',
  borderRadius: '1px',
  backgroundColor: 'blue',
  margin: '1px',

}

const Ctrl = React.createClass({

  handleUp(){
    const activeElement = document.getElementById('neo')
    let style =  window.getComputedStyle(document.getElementById('neo'), null).getPropertyValue(this.props.styleAttr);
    let param = parseFloat(style);
    const styleAttr = this.props.styleAttr;
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    this.loopAction = setInterval(function(){
      console.log("I will be decrementing")
      param += 10;
      activeElement.style[styleAttr] = param + 'px';
    }, 100)
  },
  handleDown(){
    const activeElement = document.getElementById('neo')
    let style =  window.getComputedStyle(document.getElementById('neo'), null).getPropertyValue(this.props.styleAttr);
    let param = parseFloat(style);
    const styleAttr = this.props.styleAttr;
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    this.loopAction = setInterval(function(){
      console.log("I will be decrementing")
      param -= 10;
      activeElement.style[styleAttr] = param + 'px';
    }, 100)
  },
  stopLoop(){
    console.log("I will stop the loop")
    clearInterval(this.loopAction)
  },
  render(){
    return (
      <div style={ctrlStyle}>
        <div style={upperButtonStyle} onMouseDown={this.handleUp} onMouseUp={this.stopLoop}></div>
        <div style={bottomeButtonStyle} onMouseDown={this.handleDown} onMouseUp={this.stopLoop}></div>
      </div>
    )
  }
})

export default Ctrl;
