import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("Nestor");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, image, author };
    setLoading(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setLoading(false);
      navigate("/");
    });
  };

  return (
    <div className="content">
      <div className="create">
        <h2>Add a new Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Blog Content:</label>
          <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
          <label>Image:</label>
          <input type="text" required value={image} onChange={(e) => setImage(e.target.value)} />
          <label>Blog Author:</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="Nestor">Nestor</option>
            <option value="Raquel">Raquel</option>
          </select>
          {!loading ? <button>Add Blog</button> : <button>Adding blog...</button>}
        </form>
        {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
      </div>
    </div>
  );
};

export default Create;
