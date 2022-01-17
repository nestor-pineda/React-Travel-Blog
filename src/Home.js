import { useState } from "react";
import List from "./List";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog Post 1", body: "This is the body of the blog post...", author: "Nestor", id: 1 },
    { title: "Blog Post 2", body: "This is the body of the blog post...", author: "Raquel", id: 2 },
    { title: "Blog Post 3", body: "This is the body of the blog post...", author: "Nestor", id: 3 },
  ]);

  return (
    <div className="home">
      <List blogs={blogs} title="All Blogs" />
      <List blogs={blogs.filter((item) => item.author === "Nestor")} title="Nestor Blogs" />
    </div>
  );
};

export default Home;
