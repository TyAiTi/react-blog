import {useState, useEffect} from "react"
import PostShare from "../../API/PostShare"
import GetStatus from "../../API/GetStatus"
import Post from "../../components/post/Post"
import s from "./home.module.css"
export default function Home(){
    const [blog, setBlog] = useState([])
    const [create, setCreate] = useState({content: "", benefit: ""})

    const imputCreate =(e) =>{
      const inputName = e.currentTarget.name
      const value = e.currentTarget.value
      setCreate(prev => ({ ...prev, [inputName]: value }));
    }

    const createStatus = async(e) =>{
      e.preventDefault();
      for (let key in create) {
        if (create[key] === '') {
          alert(`Bạn chưa nhập  ${key}`)
          return
        }
      }
      let ob = {
      connecter_id: 1,
      content: create.content,
      benefit: create.benefit,
      }
      const json = await PostShare(ob)
      console.log(json)
      if(json.status){
        alert("Create susscess !")
        setCreate({content: "", benefit: ""})
      }
      loadStatus()
    }

    const loadStatus = () =>{
      GetStatus()
      .then(items => {
        setBlog(items)
        console.log(items)
      })
    }

    useEffect( ()=>{
        let mounted = true;
        if(mounted) {
          loadStatus()
        }
        return () => mounted = false;    
    },[])
    
    return(
        <div>
            <div className={s.top}>
              <input className={s.shareInput} type="text" name="content" 
                              value={create.content} onChange={imputCreate }/>
              <input className={s.shareMoney} name="benefit" type="number" 
                              value = {create.benefit} onChange={imputCreate} /> 
              <button className={s.button_default}  onClick={(e)=>{createStatus(e)}} >Create</button>
            </div>

            <div>
              {blog.map((p) => (
              <Post key={p.id_st} post={p} loadStatus={loadStatus}/>))}
            </div>
        </div>
    )
}