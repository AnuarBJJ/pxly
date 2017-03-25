import React, {Component} from 'react';
// import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import {setActive} from '../actions'
import canvasData from '../reducers'

let store = createStore(canvasData);

const Canvas = React.createClass ({
	handleClick(e){
		const lastNeo = document.getElementById('neo');
		if(lastNeo){
			lastNeo.id = ''
		}
		const target = e.target.id;
		e.target.id = 'neo';
		// const t = target.substring(0,target.length);
		// this.props.dispatch(setActive(t));
	},
	render(){
		return (
			<div id='container' onClick={this.handleClick}>{this.props.element}</div>
		)
	}
})

function mapStateToProps(state){
	return {
		element: state.Element.active_element
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
		dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
