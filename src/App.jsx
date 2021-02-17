import React from 'react';
import Heading from './componets/lesson1/Heading';
// lesson 1

import Gretting, { Text, Text1, favProg } from './componets/lesson1/Greeting';
// or
// import * name from './componets/lesson1/Greeting'
// and use name.default , name.text for access
import Calculator from './componets/lesson1/calculator/Calculator';

// lesson 2
import Card from './componets/lesson2/Lprops';
import Sdata from './componets/lesson2/Sdata';
// console.log(Sdata[0].sname);

// function ncard(val) {
//   //   console.log(val);
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }

// const ncard = (val) => {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// };

// conditional series output

import Webseries from './componets/lesson2/Webseries';
import Netflix from './componets/lesson2/Netflix';
// const favSeries = 'netflix';

// const FavS = () => {
//   if (favSeries === 'netflix') {
//     return <Netflix />;
//   } else {
//     return <Webseries />;
//   }
// };

// with ternary Operator
const favSeries = 'webserise';

const FavS = () => (favSeries === 'netflix' ? <Netflix /> : <Webseries />);

function App() {
  return (
    <>
      {/* Lessons 1  */}

      {/* <Heading />
      <Gretting />
      <Text />
      <Text1 />
      <ul>
        <li>My favroute program is {favProg}</li>
      </ul>
      <Calculator /> */}

      {/* lesson 2 */}
      <h1>List Of top 5 Netflix and Web series in 2020</h1>
      <div className="cards">
        {/* <Card
          imgsrc="https://www.tjtoday.org/wp-content/uploads/2018/02/c245fb206fecea20e4f18e26dc8fa74aae6f80b5.jpg"
          title="A Netflix Original Series"
          sname="DARK"
          link="https://www.netflix.com/watch/80114790?trackId=14170032&tctx=1%2C2%2C7f171f6b-819c-49bb-a0c7-6768bd17349b-62523210%2C496322fd-3722-4080-b83d-d0c1411a23bd_3034326X6XX1598165432891%2C496322fd-3722-4080-b83d-d0c1411a23bd_ROOT%2C"
        />
        <Card
          imgsrc="https://www.tjtoday.org/wp-content/uploads/2018/02/c245fb206fecea20e4f18e26dc8fa74aae6f80b5.jpg"
          title="A Netflix Original Series"
          sname="DARK"
          link="https://www.netflix.com/watch/80114790?trackId=14170032&tctx=1%2C2%2C7f171f6b-819c-49bb-a0c7-6768bd17349b-62523210%2C496322fd-3722-4080-b83d-d0c1411a23bd_3034326X6XX1598165432891%2C496322fd-3722-4080-b83d-d0c1411a23bd_ROOT%2C"
        />
        <Card
          imgsrc="https://www.tjtoday.org/wp-content/uploads/2018/02/c245fb206fecea20e4f18e26dc8fa74aae6f80b5.jpg"
          title="A Netflix Original Series"
          sname="DARK"
          link="https://www.netflix.com/watch/80114790?trackId=14170032&tctx=1%2C2%2C7f171f6b-819c-49bb-a0c7-6768bd17349b-62523210%2C496322fd-3722-4080-b83d-d0c1411a23bd_3034326X6XX1598165432891%2C496322fd-3722-4080-b83d-d0c1411a23bd_ROOT%2C"
        /> */}
        {/* <Card
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].link}
        />
        <Card
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
        />
        <Card
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
        /> */}
        {/* {Sdata.map(ncard)} */}
        {/* {Sdata.map(function ncard(val) {
          return (
            <Card
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })} */}
        {/* {Sdata.map((val, index) => {
          return (
            <Card
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })} */}
        <FavS />
      </div>
    </>
  );
}

export default App;
