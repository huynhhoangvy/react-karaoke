import React from 'react';
import { 
  Button,
  Card, 
  Container,
  CardImg, 
  CardBody,
  CardTitle, 
} from 'reactstrap';


function VideoCard({ data, addSong, superAddSong, addSongToDatabase, user }) {
  return (
      <Container className="d-flex flex-wrap">
      {data.map((data, i) => {
        return (
        <Card id={data.id.videoId + i} key={data.id.videoId + i}>
          <CardImg 
          style={{width: "320px", height: "180px"}} 
          src={data.snippet.thumbnails.medium.url} 
          alt="Card image cap" 
          />
          <CardBody>
            <CardTitle>
              <h6 href={`http://www.youtube.com/watch?v=${data.id.videoId}`}>
                {data.snippet.title.match(/.{1,28}/g)[0] + '...'}
              </h6>
            </CardTitle>
            <Button 
            onClick={() => {
              addSong({id: data.id.videoId, title: data.snippet.title});
              addSongToDatabase({username: user, song_id: data.id.videoId, thumbnail: data.snippet.thumbnails.medium.url, title: data.snippet.title});
            }}
            >
              Add
            </Button>
            <Button 
            onClick={() => {
              superAddSong({id: data.id.videoId, title: data.snippet.title});
              addSongToDatabase({username: user, song_id: data.id.videoId});
            }}
            >
              Super Add
            </Button>
          </CardBody>
        </Card>)
})}
      </Container>
  );
};

export default VideoCard;