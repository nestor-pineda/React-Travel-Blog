import useFetch from "./CustomHooks/Fetch";
import List from "./List";

const Home = () => {
  const { apiData: blogs, loading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
      {blogs && <List blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
