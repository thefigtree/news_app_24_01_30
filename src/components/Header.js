import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  position: relative;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rebeccapurple;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 150px;
  color: black;
  font-weight: 900;
  background-color: aqua;
`;

export const Header = () => {
  return (
    <SHeader>
      <Title>News Today</Title>
    </SHeader>
  );
};
