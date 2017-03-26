import React from 'react';
import { connect } from 'react-redux';
import Ctrl from '../components/controller'

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
  componentWillMount(){
    this.element = document.getElementById('neo') ? document.getElementById('neo') : null;
  },
  handleOnChange(e){
    e.preventDefault();
    console.log(this.props);
    this.element = document.getElementById('neo');
    this.element.style.fontSize = e.target.value + "px";
  },
  addDiv(e){
    e.preventDefault();
    this.element = document.getElementById('neo');
    const child = document.createElement("DIV");
    const parent = this.element;
    parent.appendChild(child);
    parent.id = ''
    child.id = 'neo';
    child.style.height = '20px';
    this.element = child;
  },
  render(){
    return (
    	<div id="tools" style={style}>
        <form className="" action="index.html" method="post">
          <label htmlFor="">Width</label>
          <Ctrl styleAttr='width'/>
            <label htmlFor="">Height</label>
            <Ctrl styleAttr='height'/>
          <label htmlFor="">Font size</label>
          <Ctrl styleAttr='font-size'/>
          <label htmlFor="">Padding</label>
          <Ctrl styleAttr='padding'/>
          <label htmlFor="">Margin</label>
          <Ctrl styleAttr='margin'/>
          <button onClick={this.addDiv}>Add DIV </button>
        </form>
      </div>
    );
  }
})

function mapStateToProps(state){
  return state.Element;
}

export default connect (mapStateToProps)(Toolbox);
