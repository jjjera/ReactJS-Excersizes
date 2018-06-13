import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import SkiDayCount from './components/SkiDayCount';
//import Test from'./example/Test.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<SkiDayCount total = {50}
    powder = {20}
    backcountry = {10}
    goal= {100}/>, document.getElementById('root'));
registerServiceWorker();
