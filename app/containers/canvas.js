import React, {Component} from 'react';

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taget: null
		}
	}
	componentWillMount(){
		let self = this;
		document.addEventListener('click', function(e){

		  e = e || window.event;

		  if(e.target.id === 'tools' || e.target.parentElement.id === 'tools' || e.target.parentElement.parentElement.id === 'tools'){
		    return
		  }
		  self.setState({
		  	target: e.target || e.srcElement
		  })

		  var hltd = document.getElementsByClassName('heighlight');
		  for(var i=0; i<hltd.length; i++){
		    var el = hltd[i];
		    if(el.classList.contains('heighlight')){
		      el.classList.remove('heighlight')
		    }
		  }
		  self.state.target.className = 'heighlight';
		  console.log(self.state.target)

		}, false);
	}
	render(){
		return (
			<div>Some text</div>
		)
	}
}

/* spare parts
		function resizeWidth(){
		  var x = document.getElementById("width").value;
		  target.style.width = x + "px";
		}

		function resizeHeight(){
		  var y = document.getElementById("height").value;
		  target.style.height = y + "px";
		}
		function resizePadding(){
		  var z = document.getElementById("margin").value;
		  target.style.margin = z + "px";
		}
*/