import React, { useState, useRef } from 'react';

import { Button, Form, Input, Row, Col } from 'reactstrap';

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import Carousel from "../IndexSections/Carousel.jsx"
import VideoCard from 'views/IndexSections/VideoCard';
import SearchForm from 'views/IndexSections/SearchForm.jsx';
import SideNavList from 'views/IndexSections/SideNavList.jsx'

import useDataApi from 'app/useDataApi.js';
import useSongListState from 'app/useSongListState';

export default function Home() {
  const myRef = useRef(null);
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch] = useDataApi([], 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=trinh,cong,son,karaoke');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [colGrid, setColGrid] = useState('col-12');
  const { songList, addSong, superAddSong, removeSong } = useSongListState([]);

  return (
    <>
    {console.log('ditconmedata: ', data)}
      <main ref={myRef}>
        <Row>
          <Col className='col-3' >
            {console.log(songList)}
            {isSidebarOpen ? 
            <SideNavList songList={songList} />
            : 
            null}
          </Col>
          <Col className={colGrid} >
          <DemoNavbar />
          <Carousel />
          <Button 
          className="btn-1 ml-1"
          color="info"
          outline
          type="submit"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
            colGrid === 'col-12' ? setColGrid('col-9') : setColGrid('col-12');
          }} 
          >
            Toggle sidebar
          </Button>
          <div className="bg-secondary">

            <SearchForm />

            <Form onSubmit={event => {
            doFetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=${query},karaoke`);
            
            event.preventDefault();
            }}>
                
              <Input 
              type="text" 
              value={query} 
              onChange={event => setQuery(event.target.value)}
              placeholder="Search"
              />

              <Button
              className="btn-1 ml-1"
              color="info"
              outline
              type="submit"
              >
                  Outline-info
              </Button>

            </Form>
            
            {isError && <div>Somthing went wrong...</div>}
            {isLoading ? 
            <h1>Loading...</h1>
            :
            <VideoCard 
            data={data}
            songList={songList}
            addSong={addSong}
            superAddSong={superAddSong}
            removeSong={removeSong} 
            />
            }
          </div>
            
          </Col>
        </Row>
      </main>
      <CardsFooter />
    </>
  )
}

