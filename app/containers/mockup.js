import React from 'react';

const style = {
	width: '100%',
	height: '100hv',
	position: 'absolute',
	left: '0',
	top: '0',
	zIndex: '1',
	pointerEvents: 'none',
	opacity: '0.5',
}

export default function Mockup(props) {
  return (
  	<img style={style} src="../design.png"></img>
  );
}
