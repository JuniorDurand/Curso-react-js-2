import * as React from 'react'
import {Jumbotron, Button, Container, ButtonGroup, Card} from 'react-bootstrap';
import {get_post} from '../../apis/petcomp';
import Post from '../../components/Post/Post.component'



export default function SinglePost(props){
  console.log(props)
  const {params} = props.match;
  console.log(params.id)

  const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        get_post(params.id,setResults);
    }, [])

    console.log(results)
    



  return(
    <Jumbotron fluid>
      <Container>
        <p>Ola mundo</p>
        <h1>{rendered}</h1>
        <Post/>
      </Container>
    </Jumbotron>
  )
}