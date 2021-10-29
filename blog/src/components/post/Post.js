import s from './post.module.css'
import Join from "../modal/Join"
export default function Post({ post, loadStatus}) {
  const ob = {
    id_st: post.id_st,
    target_id: post.connecter_id,
    name: post.name,
    benefit: post.benefit,
    content: post.content         
  }
  const format = post.benefit && (`${post.benefit}`).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return (
    <div className={s.post}>
      <div className={s.postWrapper}>
        <div className={s.postTop}>
          <div className={s.postTopLeft}>
            <span className={s.postUsername}>
              {post?.name}
            </span>
            <span className={s.postDate}>{post.date_st}</span>
          </div>
          <div className={s.postTopRight}>
            <span >{format}</span>
            <button className={s.option} > 
              <Join ob={ob} loadStatus={loadStatus}/>
            </button> 
          </div>
        </div>
        <div className={s.postCenter}>
          <span className={s.postText}>{post?.content}</span>
        </div>
      </div>
    </div>
  );
}
