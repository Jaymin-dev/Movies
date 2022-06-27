import React, { useEffect, useState } from "react";
import "./App.scss";
import SearchInput from "./components/UI/SearchInput/SearchInput";
import backIcon from "./assets/images/back.png";
import movieImg from "./assets/images/poster1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers } from "./redux/action";
import { getImage } from "./helper/helper";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const { movieData = {} } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(requestUsers({ page: "1" }));
  }, []);

  useEffect(() => {
    if (movieData["content-items"]?.content) {
      setData(movieData["content-items"].content);
    }
  }, [movieData]);

  const handleNextData = () => {
    const number = +movieData["page-num-requested"] + 1;
    setTimeout(() => {
      dispatch(requestUsers({ page: number.toString(), isAddMore: true }));
    }, 1000);
  };

  const handleSearch = (val) => {
    setSearch(val);
    if (movieData["content-items"]?.content?.length > 0) {
      const filterData = movieData["content-items"].content.filter((data) =>
        data.name.toLowerCase().includes(val.toLowerCase())
      );
      setData(filterData);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.length || 20} //This is important field to render the next data
      next={handleNextData}
      hasMore={movieData["page-num-requested"] !== "3"}
      loader={
        <h4 style={{ textAlign: "center", marginBottom: 20 }}>Loading...</h4>
      }
    >
      <div>
        <div className="nav-space" />
        <div className="nav-bar">
          <h3 className="page-heading">
            <img
              src={backIcon}
              className="back-icon cursor-pointer"
              alt="backIcon"
            />
            {movieData?.title || "Movie"}
          </h3>
          <SearchInput inputVal={search} handleChange={handleSearch} />
        </div>
        <div className="app-wrapper">
          <div className="movie-list">
            {data.map((data, i) => (
              <div className="movie-list-wrapper" key={i}>
                <img src={getImage(data["poster-image"])} />
                <h3 className="movie-name">{data.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default App;
