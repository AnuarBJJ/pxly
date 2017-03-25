import React from 'react';
import { connect } from 'react-redux';

const style = {
  padding: '10px',
  color: 'white',
  zIndex: '2',
  backgroundColor: 'black',
  borderRadius: '5%',
  position: 'fixed',
  right: '0',
  top: '100px',
}

const Toolbox = React.createClass({
  handleOnChange(e){
    const element = document.getElementById(this.props.active_element)
    console.log(element)
    element.style.fontSize = e.target.value + "px";
  },
  render(){
    return (
    	<div id="tools" style={style}>
        <form className="" action="index.html" method="post">
          <label htmlFor="">Resize width in %</label>
          <input type="range" id="width" name="points" min="10" max="100" step="1" onChange={this.handleOnChange}/>
          <br/>
          <label htmlFor="">Resize height in %</label>
          <input type="range" id="height" name="points" min="0" max="1500" step="1" />
          <br/>
          <label htmlFor="">Margin px</label>
          <input type="range" id="margin" name="points" min="0" max="100px" step="1" />
        </form>
      </div>
    );
  }
})

function mapStateToProps(state){
  return state.Element
}

export default connect (mapStateToProps)(Toolbox)
/* spare parts
	onInput={resizeWidth()}
	onInput={resizeHeight()}
	onInput={resizePadding()}
*/
