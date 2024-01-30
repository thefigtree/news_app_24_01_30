import { useEffect, useState } from "react";

export const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=21bafff9bef44f9e9090148dec03f4c3"
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);
};
