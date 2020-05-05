import * as React from 'react'
import {Jumbotron, Button, Container, ButtonGroup, Card} from 'react-bootstrap';


export default function PostCard(props){
    console.log(props)
    return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://213.127.139.88/%20Bootstrap4/SVG/286x180.svg" />
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}