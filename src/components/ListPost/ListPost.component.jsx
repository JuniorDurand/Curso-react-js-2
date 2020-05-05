import * as React from 'react';
import {Container, CardColumns} from 'react-bootstrap';
import PostCard from '../PostCard/PostCard.component'



export default function ListPost({posts}){
    console.log(posts)
    return(
        <Container>
            <CardColumns>
                {posts.map(post=>(
                  <PostCard key={post.id}  post={post}/>
                ))}
            </CardColumns>
        </Container>
    )
}