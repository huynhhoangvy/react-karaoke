import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card, 
  CardBody,
  CardImg, 
  CardSubtitle,
  CardText, 
  CardTitle, 
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import Hero from "../IndexSections/Hero.jsx";
import VideoCard from "../IndexSections/VideoCard.jsx";
import Carousel from "../IndexSections/Carousel.jsx"

// function MeasureExample() {
//   const [documentElementScrollTop, setDocumentElementScrollTop] = useState(null);
//   useEffect(() => {
//     document.documentElement.scrollTop = documentElementScrollTop;
//   });
  
//   const [scrollingElementScrollTop, setScrollingElementScrollTop] = useState(null);
//   useEffect(() => {
//     document.scrollingElement.scrollTop = scrollingElementScrollTop;
//   });

//   const [mainScrollTop, setMainScrollTop] = useState(null);
//   useEffect(() => {
//     this.refs.main.scrollTop = mainScrollTop;
//   });

//   const measuredRef = useCallback(node => {
//     if (node !== null) {
//       setHeight(node.getBoundingClientRect().height);
//     }
//   }, []);

//   return (
//     <>
//       <h1 ref={measuredRef}>Hello, world</h1>
//       <h2>The above header is {Math.round(height)}px tall</h2>
//     </>
//   );
// }

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   // General scroll to element function

function Home() {

  const myRef = useRef(null)

  // useEffect(() => {
      // window.scrollTo(0, 0)

  //   document.documentElement.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  //   // myRef.current.main.scrollTop = 0;
  // })

  const [data, setData] = useState([]);

  useEffect(
    async () => {
      const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=trinh,cong,son,karaoke&key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI');
      const json = await response.json();
      console.log("this is data: ", json);
      setData(json.items)
    }, []);
    console.log(data)
  return (
    <>
      <DemoNavbar />
      <main ref={myRef}>
        <Carousel />
        <div className="bg-secondary">
          <ul>
            {data.map(item => {
              return (
                <li>
                  <h1>{item.snippet.title}</h1>
                  <img src={item.snippet.thumbnails.high.url} />
                </li>
              )
            })}
          </ul>
        {/* <Row style={{padding: "15px 0px"}}>
          <Col sm="4">
            <VideoCard />
          </Col>
          <Col sm="4">
            <VideoCard />
          </Col>
          <Col sm="4">
            <VideoCard />
          </Col>
        </Row> */}
        </div>
      </main>
      <CardsFooter />
    </>
  )
}

// class test extends React.Component {
//     state = {};
//     componentDidMount() {
//       document.documentElement.scrollTop = 0;
//       document.scrollingElement.scrollTop = 0;
//       this.refs.main.scrollTop = 0;
//     }
//     render() {
//       return (
//         <>
//         <DemoNavbar />
//         <main ref="main">
//           <Carousel />
//           <div className="bg-secondary">

//           {/* <Row style={{padding: "15px 0px"}}>
//             <Col sm="4">
//               <VideoCard />
//             </Col>
//             <Col sm="4">
//               <VideoCard />
//             </Col>
//             <Col sm="4">
//               <VideoCard />
//             </Col>
//           </Row> */}
//           </div>
//         </main>
//         <CardsFooter />
//         </>
//       );
//     }
// }

export default Home