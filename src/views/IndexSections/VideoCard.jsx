import React from 'react';
import { 
  Card, 
  CardImg, 
  // CardText, 
  CardBody,
  CardTitle, 
  // CardSubtitle, 
  // Button 
} from 'reactstrap';


function VideoCard({ data, addSong, superAddSong }) {
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
              <a href={`https://www.youtube.com/watch?v=$.props.id.videoId}`}>
                {data.snippet.title}
              </a>
            </CardTitle>
            <button 
            onClick={() => {
              addSong(data.snippet.title);
            }}
            >
              Add
            </button>
            <button 
            onClick={() => {
              superAddSong(data.snippet.title);
            }}
            >
              Super Add
            </button>
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