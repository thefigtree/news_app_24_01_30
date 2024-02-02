import styled from "styled-components";

const ConImage = styled.div``;

export const NewsItem = ({ item }) => {
  const websiteUrl = item.url;
  const website = websiteUrl.split("http://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return <ConImage>{item.urlToImage}</ConImage>;
};
