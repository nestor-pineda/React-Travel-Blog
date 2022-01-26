import { Link } from "react-router-dom";

const List = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>

      {blogs.map((item) => {
        return (
          <div className="blog-preview" key={item.id}>
            <div className="imgContainer" style={{ backgroundImage: `url(${item.image})` }}></div>
            <h2>{item.title}</h2>
            <p>{item.body.length > 250 ? `${item.body.substring(0, 150)}...` : item.body}</p>
            <p className="author">
              <strong>Author: </strong>
              {item.author}
            </p>
            {/* <p>ID: {item.id}</p> */}

            <Link to={`/blog/${item.id}`}>
              <button className="read-more">Read more</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
