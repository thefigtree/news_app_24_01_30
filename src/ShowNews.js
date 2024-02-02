import { NewsItem } from "./NewsItem";

export const ShowNews = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <NewsItem key={i} item={item}></NewsItem>
      ))}
    </div>
  );
};
