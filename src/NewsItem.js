import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ConImage = styled.div`
  width: 25em;
  height: 15em;
  position: relative;
  margin-bottom: 0.5em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
`;

const Con = styled.div``;

const Source = styled.div``;

const Title = styled.h2``;

const Desc = styled.p``;

const Detail = styled.div``;

export const NewsItem = ({ item }) => {
  const websiteUrl = item.url;
  const website = websiteUrl.split("http://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Container>
      <ConImage>
        <img src={item.urlToImage} alt={item.title}></img>
      </ConImage>

      <Con>
        <Source>
          <img
            src={`http://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={item.source.id}
          ></img>
          <span>{item.source.name}</span>
        </Source>
        <Title>
          <h2>{item.title}</h2>
        </Title>
        <Desc>
          <p>{item.description}</p>
        </Desc>
        <Detail>
          <small>
            <b>published At: </b>
            {formatTime}
          </small>
        </Detail>
      </Con>
      {/* <Title>{item.title}</Title>
      <ConImage>
        <img src={item.urlToImage} alt={item.title}></img>
      </ConImage> */}
      {/* <Link to={`/detail/${item.url}`}></Link> */}
    </Container>
  );
};
