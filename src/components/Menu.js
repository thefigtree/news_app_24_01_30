import styled from "styled-components";

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  li {
    display: inline-block;
    margin: 1em;
    font-size: 1em;
    padding: 0.5em 1em;
    color: black;
    font-weight: 500;
    /* border-radius: 3em; */
    cursor: pointer;
  }
`;

export const Menu = ({ active, setActive, setCategory }) => {
  const links = [
    { id: 0, name: "GENERAL", value: "general" },
    { id: 1, name: "BUSINESS", value: "business" },
    { id: 2, name: "ENTERTAINMENT", value: "entertainment" },
    { id: 3, name: "HEALTH", value: "health" },
    { id: 4, name: "SCIENCE", value: "science" },
    { id: 5, name: "SPORTS", value: "sports" },
    { id: 6, name: "TECHNOLOGY", value: "technology" },
  ];

  function onClick(id, value) {
    setActive(id);
    setCategory(value);
  }

  return (
    <Navi>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </Navi>
  );
};
