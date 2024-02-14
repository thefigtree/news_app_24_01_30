import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  position: relative;
  padding: 40px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  /* background-color: rebeccapurple; */
`;

const Logo = styled.div`
  font-family: "Noto Serif KR", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  /* background-color: aliceblue; */
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>THE DAILY NEWS</Logo>
    </SHeader>
  );
};
