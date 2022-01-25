import { useParams } from "react-router-dom";
import useFetch from "./CustomHooks/Fetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { apiData: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blogDetails">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
