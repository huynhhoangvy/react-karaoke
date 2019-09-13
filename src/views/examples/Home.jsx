import React, { useState, useRef, useEffect } from 'react';

import {
  Button
} from 'reactstrap';
import axios from 'axios';
import YoutubePlayer from "../IndexSections/YoutubePlayer"
import VideoCard from 'views/IndexSections/VideoCard';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import Backdrop from 'components/Backdrop/Backdrop';

import useSongListState from 'js/useSongListState';
import useInfiniteScroll from 'js/useInfiniteScroll';


export default function Home({ addSongToDatabase, user, data, setData, isLoading, setIsLoading, isError, setIsError, nextPageToken, setNextPageToken, query, setQuery }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const myRef = useRef(null);
  const youtubePlayerRef = useRef();
  const { songList, addSong, superAddSong, removeSong, setSongList, getNextSongId } = useSongListState([]);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState.sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    myRef.current.scrollTo(0, 0);
  }, []);

  // const MAIN_KEY = 'AIzaSyBNy_6mgtN9oX50FZNU6XcbW_0eF8aASTI';
  // const CLONE_KEY = 'AIzaSyAM5ukRQwsSybOOcRhsutGiocSMENpc7PU';

  function fetchMoreListItems() {
    setTimeout(() => {

      const fetchData = async () => {
        setIsError(false);
        try {
          if (query === '') {
            const result = await axios(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAM5ukRQwsSybOOcRhsutGiocSMENpc7PU&part=snippet&maxResults=12&q=trinh,cong,son,karaoke&pageToken=${nextPageToken}`);
            setNextPageToken(result.data.nextPageToken);
            setData(prevState => ([...prevState, ...result.data.items]));
          } else {
            const result = await axios(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAM5ukRQwsSybOOcRhsutGiocSMENpc7PU&part=snippet&maxResults=12&q=${query},karaoke&pageToken=${nextPageToken}`);
            setNextPageToken(result.data.nextPageToken);
            setData(prevState => ([...prevState, ...result.data.items]));

          }
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };

      fetchData();

      setIsFetching(false);
    }, 2000);
  }

  const foo = () => {
    youtubePlayerRef.current.getAlert();
  }

  return (
    <>
      <SideDrawer
        songList={songList}
        setSongList={setSongList}
        show={sideDrawerOpen}
        removeSong={removeSong}
        getAlert={foo}
      />
      {sideDrawerOpen
        &&
        <Backdrop click={backdropClickHandler} />
      }
      <main ref={myRef}>
        <YoutubePlayer
          ref={youtubePlayerRef}
          songList={songList}
          removeSong={removeSong}
          getNextSongId={getNextSongId}
        />
        <div className="clearfix">
          {sideDrawerOpen ?
            null
            :
            <Button
              onClick={drawerToggleClickHandler}
              style={{ bottom: "50%", marginTop: "330px", padding: "10px", height: "40px" }}
              className="btn-icon btn-info btn-2 ml-1 sticky-top position-fixed"
              color="primary"
              type="button"
            >
              <span className="btn-inner--icon">
                <i className="ni ni-bold-right" />
              </span>
            </Button>
          }
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-icon btn-2 ml-1 sticky-top"
            style={{ position: "fixed", right: "20px", bottom: "20px", marginTop: "690px", }}
            color="primary"
            type="button"
          >
            <span className="btn-inner--icon">
              <i className="ni ni-bold-up" />
            </span>
          </Button>
        </div>
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
        {isFetching && 'Fetching more data...'}
      </main>
    </>
  )
}

