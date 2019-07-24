import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import Carousel from "../IndexSections/Carousel.jsx"
import VideoCard from 'views/IndexSections/VideoCard.jsx';

const useYoutubeApi = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
    setIsError(false);
    // setIsLoading(true);
    try {
      const result = await axios(url);
      console.log('result: ', result);
      setData(result.data.hits);
    } catch(error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  
  fetchData();
  console.log('data dau roi dit me: ', data);
  }, [url]);

  return [{ data, isLoading, isError }, setUrl]
}  

export default function Home() {
  const myRef = useRef(null);
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useYoutubeApi({}, 'https://hn.algolia.com/api/v1/search?query=redux');

  return (
    <>
    {console.log('ditconmedata: ', data)}
      <DemoNavbar />
      <main ref={myRef}>
        <Carousel />
        <div className="bg-secondary">
          <form onSubmit={event => {
            doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
            
            event.preventDefault();
            }}>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button type="submit">
              Search
            </button>
          </form>
          {isError && <div>Somthing went wrong...</div>}
          {isLoading ? 
          <h1>Loading...</h1>
          : 
          <ul>
            {data.map(item => <VideoCard props={item} key={item.objectID} />)}
          </ul>
          }
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

