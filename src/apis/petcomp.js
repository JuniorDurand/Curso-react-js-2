const fetch = require("node-fetch");


const url = 'https://pet.ufma.br/comp/?rest_route=/wp/v2/posts';


const get_posts = async (setData) => {
  const url = 'https://pet.ufma.br/comp/?rest_route=/wp/v2/posts';
  try {
    const response = await fetch(url);
    const json = await response.json();
    setData(json)
    //console.log(json);
    //return json
  } catch (error) {
    console.log(error);
  }
};

const get_post = async id => {
  const url = `https://pet.ufma.br/comp/?rest_route=/wp/v2/posts/${id}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    //console.log(json);
  } catch (error) {
    console.log(error);
  }
};


export {get_post, get_posts}