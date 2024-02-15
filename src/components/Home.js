import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { ShowNews } from "../ShowNews";
// import axios from "axios";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState("general");

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=21bafff9bef44f9e9090148dec03f4c3`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  };

  useEffect(() => {
    try {
      getNews();
    } catch (error) {
      console.log("에러" + error);
    }
  }, [category]);

  // const fetchData = async () => {
  //   await axios
  //     .get(
  //       `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=21bafff9bef44f9e9090148dec03f4c3`
  //     )
  //     .then((res) => res.json())
  //     .then((data) => setItems(data.articles));
  // };

  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch (error) {
  //     console.log("에러" + error);
  //   }
  // }, [category]);

  return (
    <div>
      <Header></Header>
      <Menu
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      ></Menu>
      <ShowNews items={items}></ShowNews>
    </div>
  );
};
