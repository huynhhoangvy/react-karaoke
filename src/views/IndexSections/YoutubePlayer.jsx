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
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

import YouTube from 'react-youtube';

const Carousel = forwardRef(({ songList, removeSong, getNextSongId }, ref) => { 

  const [nextSongId, setNextSongId] = useState('t-8_FIFcefo');
  const [isPlayerEnded, setIsPlayerEnded] = useState(false);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  }
  
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert('alert from child');
    }
  }));

  const playNextSong = () => {
    setNextSongId(() => getNextSongId());
    removeSong(0);
  }


  useEffect(() => {
    if (isPlayerEnded && songList.length > 0) {
      playNextSong();
    }
    
    }, [getNextSongId()]);



  const onPlayerStateChange = event => {
    switch (event.data) {
      case -1:
        break;
      case 0:
        setNextSongId(() => getNextSongId());
        removeSong(0);
        setIsPlayerEnded(true);
        break;
      case 1:
        setIsPlayerEnded(false);
        break;
      case 2:
        break;
      case 3:
        break;
      case 5:
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
          {/* <Row className="justify-content-between align-items-center"> */}
            {/* <Col className="mb-5 mb-lg-0" lg="5"> */}
            <div className="d-flex justify-content-center">
              <div>
              <YouTube
                rel={0}
                videoId={nextSongId}
                opts={opts}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
              />
              <Button onClick={() => playNextSong()}>Skip</Button>
              </div>
              </div>
            {/* </Col> */}
          {/* </Row> */}
        </Container>
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
})
// }

export default Carousel;
