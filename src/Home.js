import useFetch from "./CustomHooks/Fetch";
import List from "./List";
import Carrousel from "./Slider";

const Home = () => {
  const { apiData: blogs, loading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <Carrousel />
      <div className="content">
        <div className="home">
          {error && <div>{error}</div>}
          {loading && (
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
          {blogs && <List blogs={blogs} title="All Travels" />}
        </div>
      </div>
    </>
  );
};

export default Home;
