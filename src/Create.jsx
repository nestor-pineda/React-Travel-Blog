import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Nestor");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };
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
    <div className="create">
      <h2>Add a new Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Content:</label>
        <textarea required value={content} onChange={(e) => setContent(e.target.value)} />

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nestor">Nestor</option>
          <option value="Raquel">Raquel</option>
        </select>
        {!loading ? <button>Add Blog</button> : <button>Adding blog...</button>}
      </form>
      <p>{title}</p>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
