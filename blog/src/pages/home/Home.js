import {useState, useEffect} from "react"

import GetStatus from "../../API/GetStatus"
import Post from "../../components/post/Post"

export default function Home(){
    const [blog, setBlog] = useState([])
    useEffect( ()=>{
        let mounted = true;
        GetStatus()
          .then(items => {
            if(mounted) {
                setBlog(items)
                console.log(items)
            }
          })
        return () => mounted = false;    
    },[])
    
    return(
        <div>
            <h1>Đây là Trang Home</h1>
            {blog.map((p) => (
            <Post key={p.id_st} post={p} />
          ))}
        </div>
    )
}