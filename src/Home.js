import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogss")
      .then((res) => {
        if (!res.ok) {
          throw Error("No hemos podido encontrar esa data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        // setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <List blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
