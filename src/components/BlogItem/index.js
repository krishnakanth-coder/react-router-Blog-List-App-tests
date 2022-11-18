import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <li className="post-container">
      <div className="post-header-container">
        <h1 className="post-header">{title}</h1>
        <p className="post-published-date">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}
export default BlogItem
