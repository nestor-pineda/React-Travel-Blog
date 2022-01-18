import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog Post 1", body: "This is the body of the blog post...", author: "Nestor", id: 1 },
    { title: "Blog Post 2", body: "This is the body of the blog post...", author: "Raquel", id: 2 },
    { title: "Blog Post 3", body: "This is the body of the blog post...", author: "Nestor", id: 3 },
  ]);

  const [name, setName] = useState("Nestor");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((item) => item.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("A render has happened!");
  }, [name]);

  return (
    <div className="home">
      <List blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <h4>{name}</h4>
      <button onClick={() => setName("Juan")}>Change name</button>
    </div>
  );
};

export default Home;
