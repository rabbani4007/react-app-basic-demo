import React, {
  useState,
  useEffect,
  MouseEvent,
  ReactEventHandler,
} from "react";
import api from "../../services/news-api";
import { NewsCard } from "./news-card";
import ReactLoading from "react-loading";

const { REACT_APP_API_KEY } = process.env;

const NewsPortal = () => {
  const [newsSource, setNewsSourceData] = useState(Array<any>());
  const [newsArticle, setNewsArticleData] = useState(Array<any>());
  const [selectedNewsSource, setSelectedNewsSource] = useState({
    id: "google-news",
    name: "Google News",
  });

  const [newsCategory, setNewsCategory] = useState(Array<any>());

  // fetch the news source
  async function getNewsSource() {
    const result = await api.getNewsSource();
    setNewsSourceData(result);
  }

  //fetch the news articles
  async function getNewsArticles() {
    setNewsArticleData(Array<any>());
    const result = await api.getNewsArticleByGoogleNewsIndia();
    setNewsArticleData(result.data.articles);
  }
  //fetch the news articles by country
  async function getTopHeadlinesIndia() {
    setSelectedNewsSource({ id: "", name: "Top Headlines India" });
    setNewsArticleData(Array<any>());
    const result = await api.getTopHeadlinesIndia();
    setNewsArticleData(result.data.articles);
  }

  //fetch the news articles by country
  async function getTopHeadlinesUsa() {
    setSelectedNewsSource({ id: "", name: "Top Headlines USA" });
    setNewsArticleData(Array<any>());
    const result = await api.getTopHeadlinesUsa();
    setNewsArticleData(result.data.articles);
  }

  //fetch the news articles by country
  async function getNewsArticleById(source: string) {
    debugger;
    const selectedSource = newsSource.find(({ name, id }) => id === source);
    setSelectedNewsSource({...selectedSource});
    setNewsArticleData([]);
    const result = await api.getNewsArticleById(selectedSource.id);
    setNewsArticleData(result.data.articles);
  }
  async function getNewsCategory() {
    const category = await api.getNewsCategory();
    setNewsCategory(category);
  }
  async function getNewsByCategory(
    e: React.MouseEvent<HTMLAnchorElement>,
    category: string
  ) {
    e.preventDefault();
    setNewsArticleData([]);
    const result = await api.getNewsByCategory(category);
    setNewsArticleData(result.data.articles);
    setSelectedNewsSource({ id: category, name: category });
  }

  useEffect(() => {
    getNewsSource();
    getTopHeadlinesIndia();
    getNewsCategory();
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="row" style={{ paddingBottom: "10px" }}>
        <div className="col-sm">
          <select
            onChange={(e) => getNewsArticleById(e.target.value)}
            className="dropdown"
            name="newsSource"
          >
            <option>--select news--</option>
            {newsSource.map((res) => (
              <option key={res.id} value={res.id}>
                {res.name}-{res.id}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary"
            onClick={getTopHeadlinesIndia}
          >
            India Top Headlines
          </button>
        </div>
        <div className="col-sm">
          <button
            type="button"
            className="btn btn-primary"
            onClick={getTopHeadlinesUsa}
          >
            World Top Headlines
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ fontWeight: "bold", color: "#5f6368" }}
              >
                {newsCategory.map((category, index) => (
                  <a
                    style={{ paddingLeft: "10px" }}
                    key={index}
                    href={category}
                    onClick={(e) => getNewsByCategory(e, category)}
                  >
                    <span style={{ textTransform: "capitalize" }}>
                      {category}
                    </span>
                  </a>
                ))}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ fontWeight: "bold", color: "#5f6368" }}
              >
                <img
                  src={`assets/images/${selectedNewsSource.id}.png`}
                  style={{ width: "40px", marginRight: "10px" }}
                />
                <span style={{ textTransform: "capitalize" }}>
                  {selectedNewsSource.name}
                </span>
              </li>
              <li></li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-24 row-cols-md-4 g-3">
        {newsArticle.length == 0 ? (
          <div style={{ marginLeft: "45%" }}>
            Loading...
            <ReactLoading type="bars" color="green" />
          </div>
        ) : (
          newsArticle.map((article, i) => (
            <div key={i}>
              <NewsCard
                id={article.id}
                name={article.source.name}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
              />
             
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPortal;
