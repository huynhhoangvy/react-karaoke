/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

import YouTube from 'react-youtube';

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

function Carousel({ songList, removeSong, getNextSongId }) { 
  console.log('ABC: ', songList.length)

  // const [songListData, setSongListData] = useState(songList)
  const [nextSongId, setNextSongId] = useState(getNextSongId());
  const [isPlayerEnded, setIsPlayerEnded] = useState(false);

  const onPlayerReady = (event) => {
    console.log('heloooooooooooooooooooooooooooo')
    event.target.playVideo();
  }

  // let foo;

  // const bar = props => {

  // }

  // if (isPlayerEnded && songList.length > 0) {
  //   return setNextSongId(songList[0].id);
  // }

  const playNextSong = () => {
    setNextSongId(() => getNextSongId());
  }

  console.log('isplayerended: ', isPlayerEnded, ' songlist.length ', songList.length);
  console.log('conditions: ', isPlayerEnded && songList.length > 0)

  useEffect(() => {
    if (isPlayerEnded && songList.length > 0) {
      playNextSong();
    }
    
    }, [getNextSongId()]);


  console.log('when?????????')

  const onPlayerStateChange = event => {
    console.log('print event: ', event)
    switch (event.data) {
      case -1:
        console.log('unstarted');
        break;
      case 0:
        console.log('video ended');
        setNextSongId(() => getNextSongId());
        removeSong(0);
        setIsPlayerEnded(true);
        // toggleYoutubePlayer();
        break;
      case 1:
        console.log('video playing from ');
        setIsPlayerEnded(false);
        // toggleYoutubePlayer();
        break;
      case 2:
        console.log('video paused at ');
        // setIsPlaying(false);
        // toggleYoutubePlayer();
        break;
      case 3:
        console.log('video is buffering ');
        // toggleYoutubePlayer();
        break;
      case 5:
        console.log('video cued ');
        // toggleYoutubePlayer();
        break;
      default:
        return;
    }
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  return (
    <>
    {console.log(isPlayerEnded ? 'ENDED!!!!!!!!!!!!' : 'PLAYING!!!!!!!!!!!!!!')}
    {console.log('print songList from carousel: ', songList)}
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-md">
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              {console.log('nextsongid: ', nextSongId)}
              <YouTube
                videoId={nextSongId}
                opts={opts}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
              />
              {/* <h1 className="text-white font-weight-light">
                  Bootstrap carousel
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href=""
                >
                  See all components
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div> */}

            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
}
// }

export default Carousel;
