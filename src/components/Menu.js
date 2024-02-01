import styled from "styled-components";

const Navi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    display: inline-block;
    margin: 1em;
    font-size: 1.2em;
    padding: 0.5em 1em;
    background-color: #eee;
    border-radius: 3em;
    cursor: pointer;
  }
`;

export const Menu = ({ active, setActive, setCategory }) => {
  const links = [
    { id: 0, name: "General", value: "general" },
    { id: 1, name: "Business", value: "business" },
    { id: 2, name: "Entertainment", value: "entertainment" },
    { id: 3, name: "Health", value: "health" },
    { id: 4, name: "Science", value: "science" },
    { id: 5, name: "Sports", value: "sports" },
    { id: 6, name: "Technology", value: "technology" },
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
