import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button 
} from 'reactstrap';

function VideoCard(props) {
  // const [data, setData] = useState([props])
  // useEffect(() => {

  // })
  return (
    <>
    <Card>
      <CardBody>
        <CardTitle><a href={props.props.url}>{props.props.title}</a></CardTitle>
        {/* <a href={props.url} >link</a> */}
      </CardBody>
    </Card>
    </>
      // <Card key={props.props.id.videoId}>
      //   <CardImg top width="100%" src={props.props.snippet.thumbnails.high.url} alt="Card image cap" />
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