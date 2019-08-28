import React from 'react';
import { 
  Button,
  Card, 
  CardImg, 
  // CardText, 
  CardBody,
  CardTitle, 
  // CardSubtitle, 
  // Button 
} from 'reactstrap';


function VideoCard({ data, addSong, superAddSong, addSongToDatabase, user }) {
  // const [selectedSongList, setSelectedSongList] = useState([]);

  return (
    <div className="bg-secondary d-flex flex-wrap">
      {data.map(data => (
        <Card key={data.kind.id}>
          <CardImg 
          style={{width: "320px", height: "180px"}} 
          src={data.snippet.thumbnails.medium.url} 
          alt="Card image cap" 
          />
          <CardBody>
            <CardTitle>
              <a href={`http://www.youtube.com/watch?v=${data.id.videoId}`}>
                {data.snippet.title}
              </a>
            </CardTitle>
            <Button 
            onClick={() => {
              addSong({id: data.id.videoId, title: data.snippet.title});
              console.log('print user: ', user);
              addSongToDatabase({username: user, song_id: data.id.videoId, thumbnail: data.snippet.thumbnails.medium.url, title: data.snippet.title});
            }}
            >
              Add
            </Button>
            <Button 
            onClick={() => {
              superAddSong({id: data.id.videoId, title: data.snippet.title});
              console.log('print user: ', user);
              addSongToDatabase({username: user, song_id: data.id.videoId});
            }}
            >
              Super Add
            </Button>
          </CardBody>
        </Card>
      ))}
      
    </div>
      // <Card key={props.props.id.videoId}>
      //   <CardBody>
      //     <CardTitle>{props.props.snippet.title}</CardTitle>
      //     <CardSubtitle>Card subtitle</CardSubtitle>
      //     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      //     <Button>Button</Button>
      //   </CardBody>
      // </Card>
  );
};

export default VideoCard;