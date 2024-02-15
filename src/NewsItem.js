import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 2fr); */
  /* border: 1px solid gray; */
  border-bottom: 1px solid gray;
`;
const Image = styled.div`
  /* width: 25em; */
  /* height: 15em; */
  /* height: 400px; */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    object-fit: cover;
    background-position: center;
    /* width: 100%; */
    background-repeat: no-repeat;
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 200px; */
`;

const Source = styled.div``;

const Title = styled.h2`
  font-size: 20px;
  line-height: 22px;
`;

const Desc = styled.p``;

const Detail = styled.div``;

export const NewsItem = ({ item }) => {
  // const websiteUrl = item.url;
  // const website = websiteUrl.split("http://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Container>
      <Image>
        <img src={item.urlToImage} alt={item.title}></img>
      </Image>
      <Con>
        <Title>{item.title}</Title>
        <Desc>{item.description}</Desc>
        <Source>{item.source.name}</Source>
        <Detail>
          <small>
            <b>published At: </b>
            {formatTime}
          </small>
        </Detail>
      </Con>
    </Container>
  );
};
