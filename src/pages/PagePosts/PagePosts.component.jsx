import * as React from 'react'
import {Jumbotron, Button, Container, ButtonGroup, Card} from 'react-bootstrap';
import {get_post, get_posts} from '../../apis/petcomp';
import ListPost from '../../components/ListPost/ListPost.component'



export default function ListPosts(){
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        get_posts(setResults);
    }, [])


  return(
    <Jumbotron fluid>
      <Container>
        <ListPost posts={results}/>
      </Container>
    </Jumbotron>
  )
}