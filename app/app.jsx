import React from 'react';
import ReactDOM from 'react-dom';

import Mockup from '../app/containers/mockup';
import Toolbox from '../app/containers/toolbox';
import Canvas from '../app/containers/canvas';

const App = () => <div> <Mockup /> <Toolbox /> <Canvas /> </div>

ReactDOM.render(<App/>, document.getElementById('app'));