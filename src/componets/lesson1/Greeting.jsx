import React from "react";

const greeting = {
    background: '#252563',
    color: '#fff',
    borderRadius: '59px',
    padding: '30px'
}
let greetingText = '';
let currTime = new Date();
// let currTime = new Date(2020, 8, 21, 20);
currTime = currTime.getHours();
console.log(currTime);
const cssStyle = {
};
if (currTime >= 1 && currTime < 12) {
    greetingText = 'Good Morning';
    cssStyle.color = 'green';
} else if (currTime > 12 && currTime < 19) {
    greetingText = 'Good After Noon';
    cssStyle.color = 'orange';
} else {
    greetingText = 'Good Night';
    cssStyle.color = 'Pink';
}
function Greeting() {
    return (
        <>
            <h1 style={{ width: '100%', textAlign: 'center', marginTop: '50px' }} > <span style={greeting} >Hello sir, <span style={cssStyle} >{greetingText} </span></span></h1>
        </>
    );
}

function Text() {
    return (
        <>
            <h1 style={{ width: '100%', textAlign: 'center', marginTop: '50px' }} > <span style={greeting} >Hello sir, <span style={cssStyle} >{greetingText} </span></span></h1>
        </>
    );
}
function Text1() {
    return (
        <>
            <h1 style={{ width: '100%', textAlign: 'center', marginTop: '50px' }} > <span style={greeting} >Hello sir, <span style={cssStyle} >{greetingText} </span></span></h1>
        </>
    );
}
const favProg = 'reactJS';
export default Greeting;
export { Text, Text1, favProg }