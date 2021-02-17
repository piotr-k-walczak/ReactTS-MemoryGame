import { Link } from "react-router-dom";
import styled from "styled-components";

const style = `
color: white;
text-decoration: none;
font-size: 1em;

&:hover {
  color: aquamarine;
}

&:active,
&:focus {
  color: grey;
}
`;

export const StyledLink = styled(Link)`
  ${style}
`;

export const StyledButton = styled.button`
  ${style}

  padding: 0;
  margin: 0;
  background: transparent;
  font-family: "Josefin Sans", sans-serif;
  border: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;

export default StyledLink;
