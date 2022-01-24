import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Details - {id}</h1>
    </div>
  );
};

export default BlogDetails;
