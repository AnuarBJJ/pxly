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
    // console.log(this.element)
    this.element = document.getElementById('neo');
    const child = document.createElement("DIV");
    const parent = this.element;
    parent.appendChild(child);
    // const hltd = document.getElementsByClassName('heighlight');
    // for(var i=0; i<hltd.length; i++){
    //   var el = hltd[i];
    //   if(el.classList.contains('heighlight')){
    //     el.classList.remove('heighlight')
    //   }
    // }
    parent.id = ''
    child.id = 'neo';
    child.style.height = '20px';
    this.element = child;
    // this.props()
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
          <label htmlFor="">Add div</label>
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
