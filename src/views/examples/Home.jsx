import React, { useState, useRef } from 'react';

import { Button, Form, Input, Row, Col } from 'reactstrap';

// import './Home.css';

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";
import Carousel from "../IndexSections/Carousel.jsx"
import VideoCard from 'views/IndexSections/VideoCard';
import SearchForm from 'views/IndexSections/SearchForm.jsx';
// import SideNavList from 'views/IndexSections/SideNavList.jsx'
import SideDrawer from 'components/SideDrawer/SideDrawer';
import Backdrop from 'components/Backdrop/Backdrop';

import useDataApi from 'app/useDataApi.js';
import useSongListState from 'app/useSongListState';

export default function Home() {
  const myRef = useRef(null);
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch] = useDataApi([], 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=trinh,cong,son,karaoke');
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [colGrid, setColGrid] = useState('col-12');
  const { songList, addSong, superAddSong, removeSong, setSongList, getNextSongId } = useSongListState([]);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    console.log('click on drawer', sideDrawerOpen);
    setSideDrawerOpen((prevState) => !prevState.sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    console.log('click on backdrop', sideDrawerOpen);
    setSideDrawerOpen(false)
  }

  return (
    <>
      <DemoNavbar />
      <SideDrawer 
        songList={songList}
        setSongList={setSongList}
        show={sideDrawerOpen} 
        removeSong={removeSong}
      />
      {sideDrawerOpen
        &&
        <>
          <Backdrop click={backdropClickHandler} />
        </>
      }
      {console.log(sideDrawerOpen)}
      {console.log('ditconmedata: ', data)}
      <main ref={myRef}>
        {/* <Row> */}
        {/* <Col className='col-3' >
            {console.log(songList)}
            {isSidebarOpen ? 
              <SideNavList songList={songList} />
              : 
            null}
          </Col> */}
        {/* <Col className=""
          // className={colGrid} 
          > */}
        

        
        <Carousel 
          songList={songList} 
          removeSong={removeSong}
          getNextSongId={getNextSongId}
        />

        {/* <Button 
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
          </Button> */}
        <div className="bg-secondary clearfix">
          <button
            onClick={drawerToggleClickHandler}
            className="btn btn-info sticky-top position-fixed"
            style={{ bottom: "50%", marginTop: "330px" }}
          >
            sidedrawer>
          </button>
          <button className="btn btn-info sticky-top" style={{ position: "fixed", right: "20px", bottom: "20px", marginTop: "690px", }}>^</button>
          {/* <Button className="btn btn-danger float-right">Example Button floated right</Button> */}
          {/* <div className="fixed-action-btn">
                <a href="#!" className="btn-floating red">
                <i className="large material-icons">chevron_right</i>
                </a>
                <ul>
                  <li>
                    <a href="#!" >
                      <i className="materialize-icons">assessment</i>
                    </a>
                  </li>
                </ul>
              </div> */}
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
            />
          }
        </div>

        {/* </Col>
        </Row> */}
      </main>
      <CardsFooter />
    </>
  )
}

