import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./CustomHooks/Fetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { apiData: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const deleteClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blogDetails">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={deleteClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
