import styled from "styled-components";

const ConImage = styled.div``;

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
    <div>
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
    </div>
  );
};
