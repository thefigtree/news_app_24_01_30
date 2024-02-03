import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  position: relative;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 150px;
  color: black;
  font-weight: 900;
`;

export const Header = () => {
  return (
    <SHeader>
      <Title>Top News</Title>
    </SHeader>
  );
};
