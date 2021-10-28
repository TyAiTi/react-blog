import s from './post.module.css'

export default function Post({ post}) {
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
          </div>
        </div>
        <div className={s.postCenter}>
          <span className={s.postText}>{post?.content}</span>
        </div>
      </div>
    </div>
  );
}
