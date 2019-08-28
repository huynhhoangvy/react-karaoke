import React, { useState, useRef } from 'react';

import {
  Button, Form, Input, Row, Col, FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import classnames from 'classnames';

// import './Home.css';

// import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import CardsFooter from "components/Footers/CardsFooter.jsx";
import Carousel from "../IndexSections/Carousel.jsx"
import VideoCard from 'views/IndexSections/VideoCard';
// import SearchForm from 'views/IndexSections/SearchForm.jsx';
// import SideNavList from 'views/IndexSections/SideNavList.jsx'
import SideDrawer from 'components/SideDrawer/SideDrawer';
import Backdrop from 'components/Backdrop/Backdrop';

import useDataApi from 'app/useDataApi.js';
import useSongListState from 'app/useSongListState';

export default function Home({ addSongToDatabase, user }) {
  const myRef = useRef(null);
  const carouselRef = useRef();
  const [query, setQuery] = useState('');
  const [{ data, isLoading, isError }, doFetch] = useDataApi([], 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=nhac,tre,karaoke');
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [colGrid, setColGrid] = useState('col-12');
  const { songList, addSong, superAddSong, removeSong, setSongList, getNextSongId } = useSongListState([]);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const drawerToggleClickHandler = () => {
    console.log('click on drawer', sideDrawerOpen);
    setSideDrawerOpen((prevState) => !prevState.sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    console.log('click on backdrop', sideDrawerOpen);
    setSideDrawerOpen(false)
  }

  const foo = () => {
    carouselRef.current.getAlert();
  }

  return (
    <>
      {/* <DemoNavbar /> */}
      <SideDrawer
        songList={songList}
        setSongList={setSongList}
        show={sideDrawerOpen}
        removeSong={removeSong}
        getAlert={foo}
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
          ref={carouselRef}
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
          {sideDrawerOpen ? 
          null 
          : 
          <Button
            onClick={drawerToggleClickHandler}
            style={{ bottom: "50%", marginTop: "330px", padding: "10px" }}
            className="btn-icon btn-info btn-2 ml-1 sticky-top position-fixed"
            color="primary"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="ni ni-bold-right" />
            </span>
          </Button>
          // <Button 
          // onClick={drawerToggleClickHandler}
          // style={{ bottom: "50%", marginTop: "330px" }}
          // className="btn btn-info sticky-top position-fixed"
          // color="primary" 
          // size="sm" 
          // type="button"
          // >
          //   >
          // </Button>
          // <button
          //   onClick={drawerToggleClickHandler}
          //   className="btn btn-info sticky-top position-fixed"
          //   style={{ bottom: "50%", marginTop: "330px" }}
          // >
          //   >
          // </button>
          }
          {/* <Button
            className="btn-icon btn-3 ml-1 sticky-top"
            style={{ position: "fixed", right: "20px", bottom: "20px", marginTop: "690px", }}
            color="primary"
            type="button"
          >
            <span className="btn-inner--icon mr-1">
              <i className="ni ni-bold-up" />
            </span>
            <span className="btn-inner--text">With icon</span>
          </Button> */}
          <Button
            className="btn-icon btn-2 ml-1 sticky-top"
            style={{ position: "fixed", right: "20px", bottom: "20px", marginTop: "690px", }}
            color="primary"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="ni ni-bold-up" />
            </span>
          </Button>
          {/* <button 
          className="btn btn-info sticky-top" 
          style={{ position: "fixed", right: "20px", bottom: "20px", marginTop: "690px", }}
          >
            ^
          </button> */}
          {/* <Button onClick={() => carouselRef.current.getAlert()}>Alert</Button> */}
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
          {/* <SearchForm 
            onSubmit={event => {
              doFetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=${query},karaoke`);
  
              event.preventDefault();
            }}
            value={query}
            onChange={event => setQuery(event.target.value)}
          /> */}
          <Form onSubmit={event => {
            event.preventDefault();
            doFetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI&part=snippet&maxResults=12&q=${query},karaoke`);
          }}>
            <FormGroup
              className={classnames({
                focused: searchFocused
              })}

            >
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search"
                  type="text"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  onFocus={e => setSearchFocused(true)}
                  onBlur={e => setSearchFocused(false)}
                />
              </InputGroup>
            </FormGroup>
          </Form>

          {/* <Button onSubmit={event => {
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

          </Button> */}

          {isError && <div>Somthing went wrong...</div>}
          {isLoading ?
            <h1>Loading...</h1>
            :
            <VideoCard
              user={user}
              data={data}
              songList={songList}
              addSong={addSong}
              superAddSong={superAddSong}
              addSongToDatabase={addSongToDatabase}
            />
          }
        </div>

        {/* </Col>
        </Row> */}
      </main>
      {/* <CardsFooter /> */}
    </>
  )
}

