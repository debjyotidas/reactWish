import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const cssStyle={ };

let nyWish=new Date();
nyWish=nyWish.getHours();
let greeting=" ";
if (nyWish>=1 && nyWish<12){
  greeting="Good morning";
  cssStyle.color="green";
}
else if (nyWish>=12 && nyWish<20){
  greeting="Good Afternoon";
  cssStyle.color="orange";
}
else{
  greeting="Good Night";
  cssStyle.color="blue";
}
ReactDOM.render(
  <>
    <div>
        <h1>HI,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>, 
  document.getElementById('root')
);


