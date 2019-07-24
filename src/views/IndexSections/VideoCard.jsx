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

function VideoCard(props) {
  // const [data, setData] = useState([props])
  // useEffect(() => {

  // })
  return (
    <>
    {console.log(props)}
    <div>
      <Card>
        <CardImg style={{width: "480px", height: "360px"}} src={props.props.snippet.thumbnails.high.url} alt="Card image cap" />
        <CardBody>
          <CardTitle><a href={`https://www.youtube.com/watch?v=${props.props.id.videoId}`}>{props.props.snippet.title}</a></CardTitle>
          {/* <a href={props.url} >link</a> */}
        </CardBody>
      </Card>
    </div>
    </>
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