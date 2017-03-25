import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Mockup from '../app/containers/mockup';
import Toolbox from '../app/containers/toolbox';
import Canvas from '../app/containers/canvas';

import canvasData from '../app/reducers';

let store = createStore(canvasData)

const App = () => <Provider store={store}><div> <Mockup /> <Toolbox /> <Canvas /> </div></Provider>

ReactDOM.render(<App/>, document.getElementById('app'));
