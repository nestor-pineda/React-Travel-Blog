import { Link } from "react-router-dom";

const List = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((item) => {
        return (
          <div className="blog-preview" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <p>{item.author}</p>
            <p>ID: {item.id}</p>
            <Link to={`/blog/${item.id}`}>Read more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
