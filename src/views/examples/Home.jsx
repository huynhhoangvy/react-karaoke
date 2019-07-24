import React, { useState, useRef } from 'react';

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import Carousel from "../IndexSections/Carousel.jsx"
import VideoCard from 'views/IndexSections/VideoCard.jsx';
import SearchForm from 'views/IndexSections/SearchForm.jsx';

import useDataApi from 'app/useDataApi.js'

export default function Home() {
  const myRef = useRef(null);
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch] = useDataApi({}, 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=trinh,cong,son,karaoke');

  return (
    <>
    {console.log('ditconmedata: ', data)}
      <DemoNavbar />
      <main ref={myRef}>
        <Carousel />
        <div className="bg-secondary">
          <SearchForm />
          <form onSubmit={event => {
            doFetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=${query},karaoke`);
            
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
          <div className="bg-secondary d-flex flex-wrap">
            {data.map(item => <VideoCard props={item} key={item.kind.videoId} />)}
          </div>
          }
        </div>
      </main>
      <CardsFooter />
    </>
  )
}

