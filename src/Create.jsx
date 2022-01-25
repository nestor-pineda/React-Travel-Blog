import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div className="create">
      <h2>Add a new Blog Post</h2>
      <form>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Content:</label>
        <textarea required value={content} onChange={(e) => setContent(e.target.value)} />

        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nestor">Nestor</option>
          <option value="Raquel">Raquel</option>
        </select>
        <button>Add Blog</button>
      </form>
      <p>{title}</p>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
