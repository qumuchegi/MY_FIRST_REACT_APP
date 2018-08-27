import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/HTMLdisplaycss.css';
import LeaguesOptions from './components/LeaguesOptions';
import ClubQueryInput from './components/ClubQueryInput';

 
ReactDOM.render(<LeaguesOptions/>,document.getElementById('leftnav1'));
ReactDOM.render(<ClubQueryInput/>,document.getElementById('clubquery_input_button'));
