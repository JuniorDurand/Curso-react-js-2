import * as React from 'react'
import {Jumbotron, Button, Container, ButtonGroup, Card} from 'react-bootstrap';
import {get_post, get_posts} from '../../apis/petcomp';

export default function ListPosts(){
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        setResults(get_posts());
    }, [])

  let data = get_posts()
  console.log(data)
  return(
    <Jumbotron fluid>
      <Container>

      </Container>
    </Jumbotron>
  )
}