import axios from 'axios';
import React,{useEffect,useState} from 'react'

const FetchingData = () => {
  const [posts, setPosts] = useState({});
  const [id , setId] = useState(1)
  const[idFromButtonClick, setIdFromButtonClick] = useState(1)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
          .then(res=>{
            console.log(res)
            setPosts(res.data)}
            )
            .catch(err=> console.error(err))
  },[idFromButtonClick])
  const handleClick = ()=>{
    setIdFromButtonClick(id)
  }
  return (
    <div>
      <input type='text' 
      value={id}
      onChange = {e=> setId(e.target.value)}/>
      <button onClick={handleClick}>click me</button>
       {/* <ul>
    {posts.map( post=>(
      <li key={post.id}> {post.title}</li>
    ))}
  </ ul> */}
  <p>{posts.title}</p>


    </div>
  )
}

export default FetchingData