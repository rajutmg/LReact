
// var React = require('react');
// var ReactDom = require('react-dom');
// import React from 'react';
// import ReactDom from 'react-dom';


// ReactDom.render('what to show','where to show','callBack Function');

//////////////////////
// ReactDom.render(<h1> Hello World! </h1>, document.getElementById('root'));


// in Pure JavaScript Form 
//////////////
// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello World !";

// document.getElementById('root').appendChild(h1);


/////////////////////////////// Using DIv 
// ReactDom.render(
//   <div>
//     <h1> Hello World! </h1> <p> Dummy Text </p>
//   </div>
//   , document.getElementById('root'));




/////////////////////////////// Using using arrays 
// ReactDom.render([
//   <h1> Hello World! </h1>,
//   <p> Dummy Text </p>
// ]
//   , document.getElementById('root'));



/////////////////////////////// Using  Fragments
// ReactDom.render(
//   <React.Fragment>
//     <h1> Hello World! </h1>
//     <p> Dummy Text </p>
//   </React.Fragment>

//   , document.getElementById('root'));


/////////////////////////////// Using  systantic sugar for Fragment
// ReactDom.render(
//   <>
//     <h1> Hello World! </h1>
//     <p> Dummy Text </p>
//   </>

//   , document.getElementById('root'));



//////////////// Expression Literials 
// import React from 'react';
// import ReactDom from 'react-dom';

// const flname = "Raju Tamang";
// ReactDom.render(
//   <>
//     <h1>My name is {flname}</h1>
//     <p>My lucky number is {2 + 3}</p>
//     <p>My lucky number is {2 * 3}</p>
//     <p>My lucky number is {Math.random()}</p>
//   </>,
//   document.getElementById('root')
// )


//////////////// Template Literials

// const flname = "Raju";
// const laname = "Tamang";
// // console.log(`My name is ${flname} ${laname}`);
// ReactDom.render(
//   <>
//     {/* <p>My lucky number is {flname} {laname}</p> */}
//     {/* <p>My lucky number is {flname + " " + laname}</p> */}
//     <p> {`My lucky number is ${flname} and my last name is ${laname}`}</p>
//     <p></p>
//   </>,
//   document.getElementById('root')
// )



// Displaying Current Date and Time 
// const flname = "Raju";
// const laname = "Tamang";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// ReactDom.render(
//   <>
//     <h1> {`My  name is ${flname} ${laname}`}</h1>
//     <p> Current Date is {currDate} </p>
//     <p> Current Time is {currTime} </p>

//   </>,
//   document.getElementById('root')
// )


// import "./index.css";
// // HTML attributes Vs JXS attributes  and Using CSS  also inlineCSS 
// const name = 'Raju Tamang';
// const img1 = "https://picsum.photos/id/237/200/300";
// const img2 = "https://picsum.photos/id/237/200/300";
// const img3 = "https://picsum.photos/id/237/200/300";
// const links = "https://www.w3schools.com/tags/ref_standardattributes.asp";

// const imageDecore = {
//   background: 'black',
//   padding: ' 20px '
// }
// ReactDom.render(
//   <>
//     <h1 className="heading" contentEditable="true" > My  name is {name} </h1>
//     <div className="imageDiv">
//       <img style={{
//         background: 'black',
//         padding: ' 20px '
//       }} src={img1} alt="images" />
//       <img src={img2} alt="images" />
//       <a href={links} target="_blank">
//         <img style={imageDecore} src={img3} alt="images" />
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// )






// challange 2 

// import React from 'react';
// import ReactDom from 'react-dom';

// const greeting = {
//   background: '#252563',
//   color: '#fff',
//   borderRadius: '59px',
//   padding: '30px'
// }
// let greetingText = '';
// // let currTime = new Date();
// let currTime = new Date(2020, 8, 21, 3);
// currTime = currTime.getHours();


// const cssStyle = {
// };
// if (currTime >= 1 && currTime < 12) {
//   greetingText = 'Good Morning';
//   cssStyle.color = 'green';
// } else if (currTime > 12 && currTime < 19) {
//   greetingText = 'Good After Noon';
//   cssStyle.color = 'orange';
// } else {
//   greetingText = 'Good Night';
//   cssStyle.color = 'Pink';
// }
// ReactDom.render(
//   <>
//     <h1 style={{ width: '100%', textAlign: 'center', marginTop: '50px' }} > <span style={greeting} >Hello sir, <span style={cssStyle} >{greetingText} </span></span></h1>
//   </>,
//   document.getElementById('root'));




import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
ReactDom.render(
  <>
    <App />
  </>,
  document.getElementById('root'));