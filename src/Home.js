import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="home">
      {loading && <div>Loading...</div>}
      {blogs && <List blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
