import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./CustomHooks/Fetch";
import { useAuthState } from "./Context";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { apiData: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const { user } = useAuthState();

  const deleteClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="content">
      <div className="blogDetails">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <div className="imgContainer" style={{ backgroundImage: `url(${blog.image})` }}></div>
            <h2>{blog.title}</h2>

            <div>{blog.body}</div>
            <p className="author">
              <strong>Written by: </strong>
              {blog.author}
            </p>

            {user ? (
              <button className="delete" onClick={deleteClick}>
                Delete
              </button>
            ) : (
              <button className="delete">
                <Link to="/login">You must Login to delete</Link>
              </button>
            )}

            {/* <button className="delete" onClick={deleteClick}>
            Delete
          </button> */}
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
